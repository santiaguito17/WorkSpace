"use strict" ;
// contendor 

const CONTYS = document.getElementById ("conty");
console.log (CONTYS.innerHTML);

// Evento

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
                let arrayProductos = resultObj.data.products;
                productospage (arrayProductos) ;

            }
        });
    });

    // crear funcion que muestre la informacion en la pagina 


function productospage (array) {

array.forEach(element => {
    console.log (element) 

CONTYS.innerHTML +=
`<div class="card list-group-item 
    list-group-item-action">

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

}

