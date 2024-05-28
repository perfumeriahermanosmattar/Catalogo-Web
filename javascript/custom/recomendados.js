export function similar(product, products, maxResults) {
  // Filtrar productos de la misma marca y opcionalmente el mismo género
  let similarProducts = products.filter(p =>
    p.GroupBrand === product.GroupBrand && p.id !== product.id
  );

  // Si hay pocos productos de la misma marca, intentar con el mismo género
  if (similarProducts.length < maxResults) {
    similarProducts = products.filter(p =>
      (p.GroupBrand === product.GroupBrand || p.Gender === product.Gender) && p.id !== product.id
    );
  }

  // Mezclar los resultados y seleccionar los primeros maxResults
  return similarProducts.sort(() => 0.5 - Math.random()).slice(0, maxResults);
}

export function write(lista) {
  for (let i = 0; i < lista.length; i++) {
    const item = lista[i];
    let html = `
      <div class="col">
        <a class="enlace" href="perfume.html?id=${item.id}">
          <div class="card d-flex align-items-center">
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
