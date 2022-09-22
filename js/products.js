"use strict" ;
// contendor 

switch (traerID()) {
    case "101":
      categoria.innerHTML = "Autos";
      break;
  
    case "102":
      categoria.innerHTML = "Juguetes";
      break;
  
    case "103":
      categoria.innerHTML = "Muebles";
      break;
  
    case "104":
      categoria.innerHTML = "Herramientas";
      break;
  
    case "105":
      categoria.innerHTML = "Computadoras";
      break;
  
    case "106":
      categoria.innerHTML = "Vestimenta";
      break;
  
    case "107":
      categoria.innerHTML = "Electrodomesticos";
      break;
  
    case "108":
      categoria.innerHTML = "Deporte";
      break;
  
    case "109":
      categoria.innerHTML = "Celulares";
      break;
  } 

  // Decalaraciones Javascript

  const BOTON_DESCENDIENTE = document.getElementById ("boton-descendiente");

  const BOTON_ASCENDIENTE = document.getElementById ("boton-ascendiente");

  const BOTON_VENTAS = document.getElementById ("boton-ventas");

  const VALOR_MINIMO = document.getElementById ("valor-minimo");

  const VALOR_MAXIMO = document.getElementById ("valor-maximo");

  const BOTON_FILTRAR = document.getElementById ("boton-filtrar");

  const BOTON_LIMPIAR = document.getElementById ("boton-limpiar");

  //Prueba botones 
//   BOTON_DESCENDIENTE.addEventListener ("click", function(){
//     alert ("prueba");
//   } );
//   BOTON_ASCENDIENTE.addEventListener ("click", function(){
//     alert ("prueba");
//   } );
//   BOTON_VENTAS.addEventListener ("click", function(){
//     alert ("prueba");
//   } );
//   BOTON_FILTRAR.addEventListener ("click", function(){
//     alert ("prueba");
//   } );
//   BOTON_LIMPIAR.addEventListener ("click", function(){
//     alert ("prueba");
//   } );

// incio una lista vacia 
let productos = []





const CONTYS = document.getElementById ("conty");
console.log (CONTYS.innerHTML);

// Evento

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
               productos = resultObj.data.products;
                productospage (productos) ;

            }
        });
    });

    // crear funcion que muestre la informacion en la pagina 

    const guardarIdProducto = (id) => {
      localStorage.setItem("IdProducto", id);
      window.location = "product-info.html";
    };

function productospage (array) {
let informacion = " ";

array.forEach(element => {
    console.log (element) 
  

informacion +=
`<div class="card list-group-item 
    list-group-item-action" onclick="guardarIdProducto(${element.id})">

    <div class="row">

    <div class="col-3">

    <img src="${element.image}" alt="product image" class="img-thumbnail">

    </div>

    <div class="col">

    <div class="d-flex w-100 
    justify-content-between">

    <div class="mb-1">

    <h4>` +
      element.name +
      " - " +
      element.currency +
      " " +
      element.cost +
      `</h4>

    <p> ` +
      element.description +
      `</p>
      </div>
      <small class="text-muted">` +
        element.soldCount +
        ` vendidos</small>
  
      </div>
  
      </div>
  
      </div>
      
      </div>`;


});
CONTYS.innerHTML = informacion ;


}

BOTON_DESCENDIENTE.addEventListener("click", function () {
    const resultado = productos.sort((a, b) => {
      return a.cost - b.cost;
    });
    productospage(resultado);
  });

BOTON_ASCENDIENTE.addEventListener("click", function () {
    const resultado = productos.sort((a, b) => {
      return b.cost - a.cost;
    });
    productospage(resultado);
});

BOTON_VENTAS.addEventListener("click", function () {
    const resultado = productos.sort((a, b) => {
      return b.soldCount - a.soldCount;
    });
    productospage(resultado);
});

BOTON_FILTRAR.onclick = () => {
    if (VALOR_MINIMO.value && VALOR_MAXIMO.value == "") {
      const res = productos.filter(
        (product) => product.cost >= VALOR_MINIMO.value
      );
  
     productospage(res);
    } else if (VALOR_MINIMO.value == "" && VALOR_MAXIMO.value) {
      const res = productos.filter(
        (product) => product.cost <= VALOR_MAXIMO.value
      );
  
     productospage(res);
    } else if (VALOR_MINIMO.value && VALOR_MAXIMO.value) {
      const res = productos.filter(
        (product) =>
          product.cost <= VALOR_MAXIMO.value && product.cost >= VALOR_MINIMO.value
      );
  
     productospage(res);
    }
  };

    BOTON_LIMPIAR.addEventListener ("click", function () {
    VALOR_MINIMO.value = "";
    VALOR_MAXIMO.value = "";
    window.location.reload ();
 
  } );