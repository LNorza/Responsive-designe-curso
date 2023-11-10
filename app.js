document.addEventListener("DOMContentLoaded", function () {
    var scrollContainer = document.querySelector(".main-tables-container");

    scrollContainer.addEventListener("scroll", function () {
        var scrollPosition = scrollContainer.scrollLeft;

        // Puedes ajustar estos valores según tus necesidades
        if (scrollPosition > 100) {
            scrollContainer.querySelector(
                ".main-tables-container"
            ).style.backgroundColor = "blue"; // Cambia el color de fondo cuando se desplaza más allá de cierta posición
        } else {
            scrollContainer.querySelector(
                ".main-tables-container"
            ).style.backgroundColor = "red"; // Restaura el color de fondo inicial
        }
    });
});
