const inputItem = document.getElementById("item");
const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor");

let lista = JSON.parse(localStorage.getItem("listaItems")) || [];

function mostrarLista() {
 contenedor.innerHTML = ""; 
 lista.forEach((item, index) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
  li.textContent = item;
  contenedor.appendChild(li);
 });
}
btnAgregar.addEventListener("click", () => {
 const nuevoItem = inputItem.value.trim(); 
 if (nuevoItem !== "") {
  lista.push(nuevoItem); 
  localStorage.setItem("listaItems", JSON.stringify(lista));
  mostrarLista(); 
  inputItem.value = ""; 
 }
});
btnLimpiar.addEventListener("click", () => {
 localStorage.removeItem("listaItems"); 
 lista = []; 
 mostrarLista(); 
});
mostrarLista();
