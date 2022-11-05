"use strict"

const CONTENDEDOR = document.getElementById ("contenedor");

const RELACIONADOS = document.getElementById("relacionados");

let compras = [];

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
       let productos = resultObj.data;
  console.log(productos);

       mostrarProducto (productos);
       relacionados(productos.relatedProducts);


       const BOTON_COMPRAR = document.getElementById ("btn-comprar");

       BOTON_COMPRAR.onclick = () => {
        if (localStorage.getItem("compras")) {
          compras = JSON.parse(localStorage.getItem("compras"));
        }
        if (compras.some((element) => element.id === productos.id)) {
          return;
        } else {
          let item = {
            id: productos.id,
            count: 1,
            name: productos.name,
            unitCost: productos.cost,
            imagen: productos.images[0],
            currency: productos.currency,
          };
          compras.push(item);

          localStorage.setItem("compras", JSON.stringify(compras));
  
        }
      
       }
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
       let comentarios = resultObj.data;
   
       mostrarComentarios(comentarios);
       

      }
    });
  });

function relacionados (array) {
  array.forEach ((element) => {
    RELACIONADOS.innerHTML +=

  `
  <div class="col-md-3">
  <div
      class="card mb-3 shadow-sm custom-card cursor-active"
      id="sofa"
      onclick="guardarIdProducto(${element.id})"
  >
     <img
        class="bd-placeholder-img card-img-top p-2 border-bottom"        src="${element.image}"
        alt="Imgagen representativa de producto relacionado"         />
      <div class="card-body">
        <h4 class="card-title mb-2">${element.name}</h4>
  </div>
</div>
  </div>
  `
;
});
}

function guardarIdProducto(id) {
  localStorage.setItem ("IdProducto", id);

  window.location.reload ();
  
}

  function mostrarProducto(obj) {
  CONTENDEDOR.innerHTML += 

`<div class="d-flex justify-content-between">
      <h2> ${obj.name} </h2>
        <div id="btn-comprar" 
          class="btn btn-success me-5 fw-bold p-2     d-flex  align-items-center">
          Comprar
        </div>
    </div>
    <hr>
    <div>
    <span class="fw-bold "> Precio </span>
    <p> ${obj.currency} ${obj.cost}</p>
    <span class="fw-bold"> Descripción </span>
    <p>${obj.description}</p>
    <span class="fw-bold"> Categoría </span>
    <p>${obj.category}</p>
    <span class="fw-bold"> Cantidad de vendidos </span>
    <p>${obj.soldCount}</p>
    <span class="fw-bold"> Imagenes ilustrativas </span>
    </div>

    <div class="d-flex"> ${conseguirImagenes(obj.images)} </div>
    
    <ul id="contenedor-comentarios" class="list-group  mb-3"> 
     
    </ul>
  
    `;
}

  const conseguirImagenes = (array) => {
    let res = "";
    array.forEach((element) => {
      res += `
      <picture class="d-flex">
        <img src="${element}" class="d-block w-100 img-thumbnail justify-content-between align-items-center m-3 mb-3 ms-0 mt-3 shadow-sm"  
        alt="imagenes de producto">
      </picture>`
      ;
    });
    return res;
  };

  const getStars = (number) => {
    switch (number) {
      case 1:
        return `<span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>`;
      case 2:
        return `<span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>`;
      case 3:
        return `<span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>`;
      case 4:
        return `<span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span>`;
      case 5:
        return `<span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>`;
    }
  };

  const mostrarComentarios = (obj) => {
    let COMMENTS_CONTAINER = document.getElementById("contenedor-comentarios");
  
    obj.forEach((comment) => {
      COMMENTS_CONTAINER.innerHTML += `
  
      <li class="list-group-item bg-light">
        <span class="fw-bold">
        ${comment.user}
        </span>
        ${comment.dateTime} -
        ${getStars(comment.score)}
        <br>
        ${comment.description}
      </li>
      `;
    });
  };