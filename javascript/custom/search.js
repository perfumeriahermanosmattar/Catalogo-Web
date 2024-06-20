document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            // Construye la URL con el parámetro de búsqueda
            const fraganciasURL = `/fragancias.html?search=${encodeURIComponent(searchTerm)}`;
            // Redirige a la página de fragancias con el parámetro de búsqueda
            window.location.href = fraganciasURL;
        }
    }

    if (searchButton) {
        searchButton.addEventListener("click", performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {
            const llave = event.key; // La tecla que se presionó
            if (llave == "Enter") {
                event.preventDefault(); // Previene el envío del formulario
                performSearch();
            }
        });
    }
});
