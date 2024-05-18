import { productos } from "./read.js";

function getData() {
  try {
    return productos[getParams()];
  } catch (error) {
    console.error(error);
  }
}

function getParams() {
  // Crea una instancia del objeto URLSearchParams
  const params = new URLSearchParams(window.location.search);

  // Accede a los valores de los parámetros
  const id = params.get("id");

  // Muestra los valores de los parámetros en la consola
  return id;
}

function insertar(producto) {
  $("#nombre").append(producto.ProductLine);

  $("#compania").append(producto.GroupBrand);

  let type;

  switch (producto.Type) {
    case "EDC":
      type = "Eau de Cologne";
      break;
    case "EDT":
      type = "Eau de Toilette";
      break;
    case "EDP":
      type = "Eau de Parfum";
      break;
    case "PAR":
      type = "Parfum";
      break;
    case "ELX":
      type = "Elixir";
      break;
    default:
      type = "Multiples";
      break;
  }

  $("#presentacion").append(type);

  console.log(producto.Volumen);

  for (let i = 0; i < producto.Volumen.length; i++) {
    $("#botones").append(
      `<button type="button" class="btn-volumen btn btn-outline-primary me-2 btn-price">${producto.Volumen[i]}ml</button>`
    );

    if ( i = 0){
      document.getElementsByClassName("btn-price")[i].addClass("price-active");
    }
  }

  for (let i = 0; i < producto.Volumen.length; i++) {
    document.getElementsByClassName("btn-price")[i].addEventListener("click", function () {
      $("#precio").html(producto.Price[i] + "$");
      $(".btn-price").removeClass("price-active"); // Remueve la clase de todos los botones
      $(this).addClass("price-active"); // Añade la clase al botón clicado
    });
  }

  $("#precio").html(producto.Price[0] + "$");
}

let producto = getData();

insertar(producto);

console.log(producto);
