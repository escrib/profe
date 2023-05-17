var mostrarMasMenos1 = document.querySelector("#mostrarMasMenos1");
var textoOculto1 = document.querySelector("#textoOculto1");
var mostrarMasMenos2 = document.querySelector("#mostrarMasMenos2");
var textoOculto2 = document.querySelector("#textoOculto2");

mostrarMasMenos1.addEventListener("click", mostrar1);
function mostrar1() {
    if (textoOculto1.className === "abrir") {
        textoOculto1.classList.remove("abrir");
        mostrarMasMenos1.textContent = "«« ver mas »»";
    } else {
        textoOculto1.classList.add("abrir");
        mostrarMasMenos1.textContent = "«« ver menos »»";
    }
}

mostrarMasMenos2.addEventListener("click", mostrar2);
function mostrar2() {
    if (textoOculto2.className === "abrir") {
        textoOculto2.classList.remove("abrir");
        mostrarMasMenos2.textContent = "«« ver mas »»";
    } else {
        textoOculto2.classList.add("abrir");
        mostrarMasMenos2.textContent = "«« ver menos »»";
    }
}