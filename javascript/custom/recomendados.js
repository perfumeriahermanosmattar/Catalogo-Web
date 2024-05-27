import { producto } from "./insert.js"; 

function findSimilarProducts(product, products, maxResults = 5) {
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


  