//inicializamos socket
const socket = io.connect();

//renderCounter
const renderCounter = () => {
  const counter = document.getElementById("counter");
  const cartId = document.getElementById("cartId").innerHTML; 
  const URL = `/carrito/${cartId}/productos`;
  fetch(URL)
    .then(res => res.json())
    .then(res => {
      counter.innerHTML = `
        <p>${res.length}</p>
      `;
      cartContainer.appendChild(counter);
    })
    .catch(err => console.log(err));
} 
renderCounter(); 

//addProduct
const addProduct = async (idCart, idProduct) => {  
  const url = `/carrito/${idCart}/${idProduct}`;  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())
    .then((data) => {  
      alert("Producto Agregado al Carrito"); 
      renderCounter(); 
    });
}

//renderProducts
const renderProducts = (arr) => {
  const productsContainer = document.getElementById("productsContainer");
  const cartId = document.getElementById("cartId");
  const idCart = cartId.textContent;  
  productsContainer.innerHTML = "";
  arr.forEach(el => {
    productsContainer.innerHTML += `
    <div class="productContainer">
            <div class="productImg">
                <img src=${el.thumbnail} alt="imagen de ${el.name}">
            </div>
            <div class="productInfo">
                <div>
                    <h3>${el.name}</h3>
                    <p>$${el.price}</p>
                </div>
                <p class="info">${el.description}</p>                
                <button class="addBtn" name="${idCart}" id="${el._id}">Add To Cart</button>   
            </div>
        </div>
    `;
  });
  const addBtn = document.getElementsByClassName("addBtn");
  for (let btn of addBtn) {
    btn.addEventListener("click", (e) => {
      let idCart = e.target.name;
      let idProduct = e.target.id;
      addProduct(idCart, idProduct);
    });
  }
}

//funcion
const URL = "/lista-productos"; 
fetch(URL)
  .then(res => res.json())
  .then(res => {
    renderProducts(res);
  })
  .catch(err => console.log(err));

//filtro
const searchTab = document.getElementById("searchTab");
searchTab.addEventListener("keyup", (e) => {
  const URL = "/lista-productos";
  fetch(URL)
    .then(res => res.json())
    .then(res => {
      const search = e.target.value;
      const productos = res.filter(el => el.description.toLowerCase().includes(search.toLowerCase()));
      renderProducts(productos);
    })
    .catch(err => console.log(err));
}); 

socket.on('productos', function() { renderProducts(); });
socket.on('messages', function(data) { renderMessages(data); });