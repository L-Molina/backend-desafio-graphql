const getProducts = async () => {
  const URL = "/lista-productos";
  const data = await fetch(URL)
  const products = await data.json(); 
  return products;
}

//form
const form = document.getElementById("addProducto");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });  
  addProduct(data);
  form.reset();
});

//addProduct
const addProduct = (data) => {
  const url = `/productos`;
  const method = "POST";
  const headers = {
    "Content-Type": "application/json"
  };  
  const body = JSON.stringify(data);
  fetch(url, {method, headers, body})
    .then(res => res.json())
    .then(async res => {       
      const products = await getProducts();
      alert("Producto Agregado correctamente");
      renderProducts(products);        
    })
    .catch(err => console.log(err));
}

//deleteProduct
const deleteProduct = (_id) => {
  const url = `/productos/${_id}`;
  const method = "DELETE";
  fetch(url, {method})
    .then(res => res.json())
    .then(async res => {    
      const products = await getProducts();
      alert("Producto eliminado correctamente");  
      renderProducts(products);             
    } )
    .catch(err => console.log(err));
}

//renderProducts
const renderProducts = (arr) => {
  const productsContainer = document.getElementById("productos");
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
            <p>${el.description}</p>
            <p>Codigo: ${el.code}</p>
            <p>Stock: ${el.stock} Unidades</p>
            <a href="/productos/edtiProduct/${el._id}" class="edtBtn">Editar Producto</a> 
            <!-- boton eliminar obtiene id -->     
            <button class="dltBtn" name="${el._id}">Eliminar Producto</button>
            
        </div>
      </div>
    `;
  });
  const deleteBtns = document.getElementsByClassName("dltBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", (e) => {    
      const _id = e.target.name;    
      deleteProduct(_id);
    } );
  }
}

//URL
const URL = "/lista-productos";
fetch(URL)
  .then(res => res.json())
  .then(res => {
    renderProducts(res);
  })
  .catch(err => console.log(err));


//searchTab
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