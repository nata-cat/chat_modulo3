
function mostrarChat(){

    let conversaciones = document.getElementById('moduloConversaciones');
    conversaciones.classList.toggle('principal__izquierda--mostrar');
    
}

//Creamos la funcion para el menu desplegable en mobile

let desplegarMenu = () => {

    var cambiarNavegador = document.getElementById('menuPrincipal');
    cambiarNavegador.className = 'navegador--responsive';

    var cambiarLinks = document.querySelectorAll('.navegador__link');
    
    for(let i=0; i<cambiarLinks.length; i++){
        
        cambiarLinks[i].classList.toggle('navegador__link--responsive') 
    }

    var cambiarIcono = document.getElementById('iconoNavegador');
    cambiarIcono.className += ' navegador__icon--responsive';

}
