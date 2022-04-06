let sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if(isNaN(prevRes)){
    throw "gracioso";
        }
       mensaje = definirMensaje(prevRes);
       resultado = verificarAprobacion(8,5,prevRes);
    
    //  mensaje ="hola";
    } catch(e){
        resultado = "te crees gracioso infeliz? ";
         mensaje = "INTENTO DE HACKEO DENEGADO "; 
    }

    abrirModal(resultado,mensaje);
})

let definirMensaje =(pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "muchacho pendejo ";
        break;
        case 2: resultado = "que hiciste pendejo ";
        break;
        case 3: resultado = "no sabes ni un carajo ";
        break;
        case 4: resultado = " ya la cagaste";
        break;
        case 5: resultado = " mucho que mejorar  ";
        break;
        case 6: resultado = "pasaste de milagro ";
        break;
        case 7: resultado = " pasaste pero puedes mejorar ";
        break;
        case 8: resultado = " aprobado ";
        break;
        case 9: resultado = " muy bien ";
        break;
        case 10: resultado = " realmente eres el papu de papus";
        break;
        default: resultado = "valor invalido";  
    }

    return resultado;
}

let verificarAprobacion =(nota1,nota2,prevRes)=>{

    promedio = (nota1 + nota2 + prevRes)/3;
    if(promedio >= 6){
    return `<span class='green'>APROBADO</span>`;
    }
    return `<span class='red'>DESAPROBADO</span>`;
}

let abrirModal = (res,msg)=>{
   document.querySelector(".resultado").innerHTML = res;
   document.querySelector(".mensaje").innerHTML = msg;
   let modal = document.querySelector(".modal-background");
   modal.style.display="flex";
   modal.style.animation = "aparecer 1s forwards";
  } 