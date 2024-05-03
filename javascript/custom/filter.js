let lista = document.querySelectorAll(".filtrador");
let maleCheckbox = document.getElementById("maleCheckbox");
let femaleCheckbox = document.getElementById("femaleCheckbox");
let barValue = 0;
let filterActive = false;

lista.forEach(function (item) {
  item.addEventListener("click", function () {
    Filter();
  });
});

document.getElementById('colador').addEventListener('click', function (){
  if (filterActive) {
    filterActive = false;
    barValue = 0;
    barValue =  document.getElementById("rangeBar").value = 0;
    maleCheckbox.checked = true;
    femaleCheckbox.checked = true;
    document.getElementById('valor').textContent = barValue + "$";
    Filter();
  } else {
    filterActive = true;
  }
})

function Filter(){
  fetch("/json/inventario.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("productos").innerHTML = "";
        data.forEach((element) => {
           insert(element);
        });
      })
      .catch((error) => {
        console.error("Se produjo un error al cargar el archivo JSON:", error);
      });
}

document.getElementById('rangeBar').addEventListener('input', function() {
  // Obtiene el valor seleccionado
  barValue =  this.value;
  // Muestra el valor seleccionado en el span
  document.getElementById('valor').textContent = barValue + "$";
  Filter();

});

function verif(element) {
  visible = true;

  if (element["Gender"] == "Male") {
    if (!maleCheckbox.checked) {
      // alert("Elmio");
      visible = false;
    }
  }

  if (element["Gender"] == "Female") {
    if (!femaleCheckbox.checked) {
      // alert("mialma");
      visible = false;
    }
  }

  element["Price"].forEach((Price) => {
    if ( Price < barValue ){
      visible = false;
    }
  });

  return visible;
}

function insert(element) {
  if ( !filterActive ||  verif(element) ) {
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
    $('#productos').append(html);
    // console.log(element["Gender"]);
  }
}
