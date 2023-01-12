const encriptar = document.getElementById("botonUno");
const desencriptar = document.getElementById("boton2");
const contenidoEliminar = document.getElementById("eliminar");
const textarea1 = document.getElementById("valor1");
const contenidoAgregar = document.getElementById("valor2");
const copyButton = document.getElementById("botonCopy");


     copyButton.addEventListener("click", copiar());

    encriptar.addEventListener("click", function(){
        if(textarea1.value == ""){
            alert("ingrese una palabra")
        }
        else{
            contenidoEliminar.classList.add("quitar");
        
        textEncriptar();
        showButton();

        }
        
    });

    desencriptar.addEventListener("click", function(){
        if(textarea1.value == ""){
            alert("Ingrese texto")

        }
        else{
            contenidoEliminar.classList.add("quitar");
        textDesencriptar();
        

        }
        
    });


    function showButton (){
        copyButton.style.opacity = 1;
    }
    

function textEncriptar(){
    let resultado = document.getElementById("valor1").value;
    encriptado = resultado.replace(/e/igm,"enter");
    encriptado = encriptado.replace(/i/igm,"imes");
    encriptado = encriptado.replace(/a/igm,"ai");
    encriptado = encriptado.replace(/o/igm,"ober");
    encriptado = encriptado.replace(/u/igm,"ufat");
    document.getElementById("valor2").innerHTML = encriptado;
};


function textDesencriptar(){
    let resultado = document.getElementById("valor1").value;
    encriptado = resultado.replace(/enter/igm,"e");
    encriptado = encriptado.replace(/imes/igm,"i");
    encriptado = encriptado.replace(/ai/igm,"a");
    encriptado = encriptado.replace(/ober/igm,"o");
    encriptado = encriptado.replace(/ufat/igm,"u");
    document.getElementById("valor2").innerHTML = encriptado;
};

function copiar(){
    contenidoAgregar.select();
    contenidoAgregar.setSelectionRange(0,99999)
    document.execCommand("copy");

}
  
