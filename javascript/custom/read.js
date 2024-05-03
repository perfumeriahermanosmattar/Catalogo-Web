fetch('/json/inventario.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos JSON, por ejemplo:
    write(data);
  })
  .catch(error => {
    console.error('Se produjo un error al cargar el archivo JSON:', error);
  });

function write(data) {
    data.forEach(element => {
      let html = `
        <div class="col">
            <div class="card">
                <img src="/Assets/Img/Perfume/perfume.png" class="card-img-top img-cardy" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element["ProductLine"]}</h5>
                    <h6 class="card-subtitle">${element["GroupBrand"]}</h6>
                    <h6 class="card-price">${element["Price"][0]}$</h6>
                </div>
            </div>
        </div>`;
        $('#productos').append(html); // Agrega el HTML generado al cuerpo del documento (puedes cambiar 'body' por el selector adecuado)
    });
}
