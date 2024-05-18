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
  for (let i = 0; i< limit; i++) {
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

export const productos = await read();

write (productos,25);
