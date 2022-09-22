"use strict"

const CONTENDEDOR = document.getElementById ("contenedor");

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
       let productos = resultObj.data;
  
       mostrarProducto (productos);

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

  const mostrarProducto = (obj) => {
    CONTENDEDOR.innerHTML += `
    <h2> ${obj.name} </h2>
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
  };

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