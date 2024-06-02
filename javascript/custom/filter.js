import { read } from './read.js';
import { write } from './read.js';
import { paginar } from './read.js';
import { currentPage } from './pagination.js';
import { setCurrentPage } from './pagination.js';
import { setupPagination } from './pagination.js';

let allProducts = [];
let filteredProducts = [];
let genderFilter = ["Male", "Female"];
let priceFilter = 0;
let filterActive = false;

export function filterData(data, genderFilter, priceFilter) {
  return data.filter(item => {
    const matchesGender = genderFilter.includes(item.Gender);
    const matchesPrice = item.Price.some(price => price >= priceFilter);
    return matchesGender && matchesPrice;
  });
}

export function applyFilters() {
  filteredProducts = filterData(allProducts, genderFilter, priceFilter);
  setCurrentPage(0);
  movePage();
}

export function movePage(){
  write(filteredProducts, (currentPage + 1) * 30);
  paginar(filteredProducts.length, 30);
  setupPagination();
  console.log(currentPage);
}

export async function initializeFilters() {
  allProducts = await read("/json/inventario.json");
  applyFilters();
  movePage();
  // console.log(allProducts.length)
}

// Event listeners for filter changes
document.getElementById("rangeBar").addEventListener("input", function() {
  priceFilter = parseInt(this.value);
  document.getElementById("valor").textContent = priceFilter + "$";
  applyFilters();
});

document.getElementById("maleCheckbox").addEventListener("change", updateGenderFilter);
document.getElementById("femaleCheckbox").addEventListener("change", updateGenderFilter);

function updateGenderFilter() {
  genderFilter = [];
  if (document.getElementById("maleCheckbox").checked) {
    genderFilter.push("Male");
  }
  if (document.getElementById("femaleCheckbox").checked) {
    genderFilter.push("Female");
  }
  applyFilters();
}

document.getElementById('colador').addEventListener('click', function() {
  filterActive = !filterActive;
  if (!filterActive) {
    priceFilter = 0;
    document.getElementById("rangeBar").value = 0;
    genderFilter = ["Male", "Female"];
    document.getElementById("maleCheckbox").checked = true;
    document.getElementById("femaleCheckbox").checked = true;
  }
  document.getElementById('valor').textContent = priceFilter + "$";
  applyFilters();
});
