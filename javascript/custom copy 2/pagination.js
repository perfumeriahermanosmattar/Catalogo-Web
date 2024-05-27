import { applyFilters, initializeFilters } from './filter.js';

export let currentPage = 0;

export function setupPagination() {
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("skip-page")[i].addEventListener("click", function () {
            console.log("e mano");
            currentPage = i;
            applyFilters();
            $(".skip-page").removeClass("page-active");
            $(this).addClass("page-active");
        });
    }

    document.getElementById("btn-prev").addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            applyFilters();
            updatePaginationClass();
        }
    });

    document.getElementById("btn-next").addEventListener("click", () => {
        if (currentPage < 5) {
            currentPage++;
            applyFilters();
            updatePaginationClass();
        }
    });
}

function updatePaginationClass() {
    $(".skip-page").removeClass("page-active");
    $(".skip-page").eq(currentPage).addClass("page-active");
}

// initializeFilters();
// setupPagination();
