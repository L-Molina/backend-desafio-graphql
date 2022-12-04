const form = document.getElementById("editForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  editProduct(data);
});

const editProduct = (data) => {
  const url = `/productos/edtiProduct`;
  const method = "PUT";
  const headers = {
    "Content-Type": "application/json"
  };  
  const body = JSON.stringify(data);
  fetch(url, {method, headers, body})
    .then(res => res.json())
    .then(res => {    
        alert("Producto editado correctamente");
        window.location.href = "/productos";      
    })
    .catch(err => console.log(err));
}