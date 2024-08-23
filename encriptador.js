const d = document;
const textArea = d.querySelector(".formInput");
const imgtoys = d.querySelector(".resultadoToys");
const imgmujer = d.querySelector(".fmujer");
const resultitu = d.querySelector(".resultadoTitulo");
const resultext = d.querySelector(".resultadoTexto");
const botonEncriptar = d.querySelector(".btn-encriptar");
const botonDesencriptar = d.querySelector(".btn-desencriptar");
const botonCopiar = d.querySelector(".btn-copiar");
const llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];





// funcion para encriptar texto
function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) { 
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1]; // Reemplaza letra por el equivalente encriptado
                break; 
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

// funcion para desencriptar texto
function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], 'g'); // Se usa llaves[i][1] como patrón para el reemplazo
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

// ocultar elmentos
textArea.addEventListener("input", (e) => {
    imgtoys.style.display = "none";
    imgmujer.classList.remove("hidden");
    resultitu.textContent = "Loading...";
    resultitu.classList.add("loader");
   resultext.textContent = "";
});


//  botón de encriptar
botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.trim().toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);

    if (mensaje === "") {
        alert("Ooop! ¡El texto se esfumó!"); 
    } else {
    resultext.textContent = mensajeEncriptado;// muestra el texto
    botonCopiar.classList.remove("hidden");
    resultitu.textContent="El resultado es:";
    resultitu.classList.remove("loader");
    }
});

//  botón de desencriptar
botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.trim().toLowerCase();

    if (mensaje === "") {
        alert("Ooop! ¡El texto se esfumó!"); 
    } else {
        let mensajeDesencriptado = desencriptarMensaje(mensaje);
        resultext.textContent = mensajeDesencriptado;
        botonCopiar.classList.remove("hidden");
        resultitu.textContent="El resultado es:";
        resultitu.classList.remove("loader");
    }
});

botonCopiar.addEventListener("click", () => {
    let textoCopiado=resultext.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()  => {
        imgtoys.style.display = "block";
        imgmujer.classList.add("hidden");
        resultitu.textContent="Texto Copiado";
        resultext.textContent="";
        botonCopiar.classList.add("hidden");
        textArea.value="";

    });
});


