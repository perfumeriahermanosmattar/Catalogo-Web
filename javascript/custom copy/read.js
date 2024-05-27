async function read() {
  try {
    const response = await fetch("/json/inventario.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Se produjo un error al cargar el archivo JSON:", error);
    return []; // Devuelve un array vacío en caso de error
  }
}

function write(data, limit) {

  $("#productos").empty();
  for (let i = limit - 20; i < limit; i++) {
    let html = `
      <div class="col">
        <a class="enlace" href="perfume.html?id=${data[i]["id"]}">
        <div class="card">
            <img src="/Assets/Img/Perfume/perfume.png" class="card-img-top img-cardy" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[i]["ProductLine"]}</h5>
                <h6 class="card-subtitle">${data[i]["GroupBrand"]}</h6>
                <h6 class="card-price">${data[i]["Price"][0]}$</h6>
            </div>
        </div>
        </a>
      </div>
        `;
    $("#productos").append(html); // Agrega el HTML generado al cuerpo del documento (puedes cambiar 'body' por el selector adecuado)
  }
}


// FUNCIONES DE PAGINACION

let currentPage = 0;

for (let i = 0; i < 6; i++) {
  const skipPageElement = document.getElementsByClassName("skip-page")[i];
  console.log(skipPageElement);

  skipPageElement.addEventListener("click", () => { // Función con flecha
    currentPage = i; // Captura el valor de 'i' del bucle
    console.log(currentPage);
    write(productos, (currentPage + 1) * 20);
    $(".skip-page").removeClass("page-active");
    $(this).addClass("page-active");
  });
}

const prev = document.getElementById("btn-prev");

prev.addEventListener("click", () => {

  // Decrementa currentPage pero asegúrate de que no sea menor que 0
  if (currentPage > 0) {
    currentPage--;
  } else {
    return;
  }

  // Selecciona la página actual y quita la clase 'page-active'
  let thisPage = document.querySelectorAll(".skip-page")[currentPage];
  $(thisPage).removeClass("page-active");

  // Selecciona la nueva página y añade la clase 'page-active'
  thisPage = document.querySelectorAll(".skip-page")[currentPage];
  $(thisPage).addClass("page-active");

  // Llama a la función write con los nuevos parámetros
  write(productos, (currentPage + 1) * 20);
});

const next = document.getElementById("btn-next")

next.addEventListener("click", () => {

  // Decrementa currentPage pero asegúrate de que no sea menor que 0
  if (currentPage < 5) {
    currentPage++;
  } else{
    return;
  }

  // Selecciona la página actual y quita la clase 'page-active'
  let thisPage = document.querySelectorAll(".skip-page")[currentPage];
  $(thisPage).removeClass("page-active");

  // Selecciona la nueva página y añade la clase 'page-active'
  thisPage = document.querySelectorAll(".skip-page")[currentPage];
  $(thisPage).addClass("page-active");

  // Llama a la función write con los nuevos parámetros
  write(productos, (currentPage + 1) * 20);
});

export const productos = await read();

write(productos, 20);
