import { applyFilters } from './filter.js';
import { movePage } from './filter.js';

export let currentPage = 0;
export function setCurrentPage(num){
    currentPage = num;
}

const paginationItems = document.getElementsByClassName("skip-page");

export function setupPagination() {

    for (let i = 0; i < paginationItems.length; i++) {
        paginationItems[i].addEventListener("click", function () {
            console.log("e mano: " + i);
            currentPage = i;
            movePage();
            updatePaginationClass();
        });
    }
}

document.getElementById("btn-prev").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        // applyFilters();
        movePage();
        updatePaginationClass();
    }
});

document.getElementById("btn-next").addEventListener("click", () => {
    if (currentPage < paginationItems.length - 1) { // Adjust based on the length of pagination items
        currentPage++;
        // applyFilters();
        movePage();
        updatePaginationClass();
    }
});

function updatePaginationClass() {
    $(".skip-page").removeClass("page-active");
    $(".skip-page").eq(currentPage).addClass("page-active");
}
