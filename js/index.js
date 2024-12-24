let shante = document.getElementById("shante");
let animacion = setInterval(cambiar_imagen, 50);
let num_imagen = 0;
let x = 1;
let y = 1;
let anchoPantalla = window.innerWidth; /*Ancho de la pantalla*/
let altoPantalla = window.innerHeight; /*Alto de la pantalla*/

function cambiar_imagen(){
    num_imagen ++;
    let direc;
    if(num_imagen > 15){
        num_imagen = 1;
    }
    direc = "/img/shante/Shante_"+num_imagen+".png";
    shante.setAttribute("src", direc);
}

document.addEventListener("keydown", mover);
function mover(event){
    console.log("Se presiono una tecla", event.keyCode); 
    if (event.keyCode == 68 && x + 5 <= anchoPantalla - shante.offsetHeight) { /*Tecla d*/
        console.log("Me movere 5 pixeles a la derecha");
        x = x + 5;
    }

    if (event.keyCode == 65 && x - 5 >= 0) { /*Si se presiona tecla a*/
        console.log("Me movere 5 pixeles a la izquierda");
        x = x - 5;
    }

    shante.style.left = x +"px";

    if (event.keyCode == 87 && y - 5 >= 0) { /*Si se presiona tecla w*/
        console.log("Me movere 5 pixeles para arriba");
        y = y - 5;
    }

    if (event.keyCode == 83 && y < altoPantalla - shante.offsetHeight) { /*Si se presiona tecla s*/
        console.log("Me movere 5 pixeles para abajo");
        y = y + 5;
    }

    shante.style.top = y +"px";
}


