const btnEnc = document.getElementById("btnenc")
const btnDesenc = document.getElementById("btndesenc")
const btnCopy = document.getElementById("btncopy")
const textoEntrada = document.getElementById("txt-input");
const textoSalida = document.getElementById("texto-salida")
const cuadroMuneco = document.getElementById("cuadro-muneco")
const cuadroTexto = document.getElementById("cuadro-texto")
const frame1 = document.querySelector(".frame1")
const frame2 = document.querySelector(".frame2")
var scrw = parseFloat(document.documentElement.scrollWidth);

btnEnc.onclick = encriptar;
btnDesenc.onclick = desencriptar;
btnCopy.onclick = copyToClipboard;

textoEntrada.addEventListener("input", function() {
    this.value = this.value.toLowerCase();
  });

// Función para encriptar el texto
function encriptar() {

    let texto = textoEntrada.value
    
    if(texto!=""){
        
        if( scrw< 480.0){
            frame1.style.height = "60%"
            frame2.style.height = "40%"
        }else if(scrw<820){
            frame1.style.height = "50%"
            frame2.style.height = "50%"
        }
        
        let vocales= {
            'a': 'ai',
            'e': 'enter',
            'i' : 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
    
        let texto_encriptado = texto.replace(/[aeiou]/g, i => vocales[i]);
        cuadroMuneco.style.display = "none"
        cuadroTexto.style.display = "block"
        textoSalida.textContent = texto_encriptado
    }else{
        alert("No hay nada que encriptar")
    }

}

// Función para desencriptar el texto
function desencriptar() {
    let texto = textoEntrada.value

    if(texto!=""){
        if( scrw< 480.0){
            frame1.style.height = "60%"
            frame2.style.height = "40%"
        }else if(scrw<820){
            frame1.style.height = "50%"
            frame2.style.height = "50%"
        }
        
        let vocales= {
            'ai': 'a',
            'enter': 'e',
            'imes' : 'i',
            'ober': 'o',
            'ufat': 'u'
        };
    
        for (let key in vocales) {
            texto = texto.replace(new RegExp(key, "g"), vocales[key]);
        }
        console.log(texto);
        cuadroMuneco.style.display = "none"
        cuadroTexto.style.display = "block"
        textoSalida.textContent = texto
    }else{
        alert("No hay nada que encriptar")
    }

}

function copyToClipboard() {
   navigator.clipboard.writeText(textoSalida.textContent)
   textoEntrada.value = ""
   btnCopy.innerHTML = "Copiado &#10003";
   setTimeout(function () {
    btnCopy.innerHTML = "Copiar";
    }, 3000)
  }
