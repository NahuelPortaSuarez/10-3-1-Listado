const conte = document.getElementById("contenedor");

document.getElementById("agregar").addEventListener("click", () => {
    const objeto = document.getElementById("item");
    localStorage.setItem("item", objeto.value);
    conte.innerHTML += localStorage.getItem("item");
    conte.innerHTML += "<br>";
    objeto.value = "";
});

document.getElementById("limpiar").addEventListener("click", () => {
    localStorage.clear();
    conte.innerHTML = "";
});
