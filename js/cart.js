"use strict"

// Alerta exitosa
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

// Alerta error
function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

const TABLA = document.getElementById("tabla");
const PREMIUM= document.getElementById("premium");
const EXPRESS = document.getElementById("express");
const STANDARD = document.getElementById("standard");
const TEXTO_SUBTOTAL = document.getElementById("subtotal");
const TEXTO_ENVIO = document.getElementById("envio");
const TEXTO_TOTAL = document.getElementById("total");

function traerCompras () {
  return JSON.parse(localStorage.getItem("compras"));
}

let itemsCarrito = traerCompras ()
console.log (itemsCarrito);


// *Declaraciones 
//
// const IMAGEN = document.getElementById ("imagen"); 

// const NAME = document.getElementById ("nombre"); 

// const COSTO = document.getElementById ("costo"); 

// const CANTIDAD = document.getElementById ("cantidad"); 

// const SUBTOTAL = document.getElementById ("subtotal"); 

// //* Llama a la API

// document.addEventListener("DOMContentLoaded", function (e) {
//     getJSONData(CART_INFO_URL).then(function (resultObj) {
//       if (resultObj.status === "ok") {
//         let productos = resultObj.data.articles;
//         mostrarCompras(productos);
//       }
//     });
//   });

//   function mostrarCompras (array) {
//     array.forEach((element) => {
//         console.log (element);

//         IMAGEN.innerHTML = `<img src="${element.image}" style="width:80px"></img>` 

//         NAME.innerHTML = element.name

//         COSTO.innerHTML = element.currency + " " + element.unitCost;

//         CANTIDAD.innerHTML = `<input 
//         class="form-control"
//         type="number"
//         placeholder="1"
//         style="width: 5rem"
//         id="cantidadInput">

//         </input>`;

//         SUBTOTAL.innerHTML =
           
//            `<div class="d-flex"> 
//             <p>${element.currency}</p>
//             <p id="calculoCosto">${element.unitCost} </p>
//             </div>`;


//         const CALCULO = document.getElementById
//     ("cantidadInput");

//     CALCULO.onchange = () => {
//         document.getElementById("calculoCosto").innerHTML =
//         element.unitCost * CALCULO.value;

//     };
//     });
//   }

