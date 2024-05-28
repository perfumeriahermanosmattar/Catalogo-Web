document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");

    if (searchButton) {
        searchButton.addEventListener("click", function () {
            const searchTerm = document.getElementById("searchInput").value.trim();
            if (searchTerm !== "") {
                // Construye la URL con el parámetro de búsqueda
                const fraganciasURL = `/productos/fragancias.html?search=${encodeURIComponent(searchTerm)}`;
                // Redirige a la página de fragancias con el parámetro de búsqueda
                window.location.href = fraganciasURL;
            }
        });
    }
});

