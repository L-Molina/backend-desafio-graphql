const cartId = document.getElementById("cartId").innerHTML;
const carritosContainer = document.getElementById("cartContainer");

//renderCarritos
const renderCarritos = async () => {
  const url = `/carrito/${cartId}/productos`
  const data = await fetch(url);
  const productos = await data.json();
  
	carritosContainer.innerHTML = "";
  
	if (productos.length == 0) {
    carritosContainer.innerHTML = `    
      <td colspan="4">No hay Productos</td>    
    `;
  } else {
    productos.forEach((el) => {
      carritosContainer.innerHTML += `
      <tr>
        <td>${el.name}</td>
        <td>${el.price}</td>
        <td><img src="${el.thumbnail}" class="productImage"></td>
        <td><button class="deleteBtn" name="${cartId}" id="${el._id}">X</button></td>        
      </tr>   
      `;
    });
    const deleteBtn = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", (e) => {
        e.preventDefault();
        const idProduct = e.target.id;
        const idCart = e.target.name; 
        deleteFromCart(idCart, idProduct);    
      });
    }
  }
};

renderCart();

/* Form */
const form = document.getElementById("finalizarCompra");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  } );  
  finalizarCompra(data);
});

//finalizarCompra
const finalizarCompra = (data) => {
  const url = '/carrito/buy';
  const method = "PUT";
  const headers = {
    "Content-Type": "application/json"
  };  
  const body = JSON.stringify(data); 
  fetch(url, {method, headers, body})
    .then(res => res.json())
    .then(res => {    
        alert("Compra Realizada con Exito");  
        window.location.href = "/";      
    } )
    .catch(err => console.log(err));
}

//deleteFromCart
const deleteFromCart = async (idCart, idProduct) => {
  const url = `/carrito/${idCart}/${idProduct}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then((res) => res.json())
  .then((data) => {
    alert("Producto Eliminado");
    renderCart()
  });
}