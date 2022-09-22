"use strict"


const NOMBRE = document.getElementById ("nuevo")

console.log ("NOMBRE")


function traerMail () {
    return localStorage.getItem ("Email");
}

function mostrarUsusario () {
    NOMBRE.innerHTML = traerMail ()

}

mostrarUsusario () ;
