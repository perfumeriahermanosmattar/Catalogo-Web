export async function read() {
  try {
    const response = await fetch("/json/inventario.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Se produjo un error al cargar el archivo JSON:", error);
    return []; // Devuelve un array vacío en caso de error
  }
}

export function write(data, limit) {
  $("#productos").empty();
  const start = (limit - 20 < 0) ? 0 : limit - 20;
  for (let i = start; i < limit && i < data.length; i++) {
    const item = data[i];
    let html = `
      <div class="col">
        <a class="enlace" href="perfume.html?id=${item.id}">
        <div class="card">
            <img src="/Assets/Img/Perfume/perfume.png" class="card-img-top img-cardy" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.ProductLine}</h5>
                <h6 class="card-subtitle">${item.GroupBrand}</h6>
                <h6 class="card-price">${item.Price[0]}$</h6>
            </div>
        </div>
        </a>
      </div>`;
    $("#productos").append(html);
  }
}

export function paginar(length, limit) {
  let num = Math.ceil(length / limit);

  let cont = document.getElementById("page-container")

  for (let i = 0; i < num; i++) {
    let html = `
      <li class="page-item"><a class="page-link skip-page" href="#">${i+1}</a></li>
    `;
    $("#page-container").append(html);
  }

}