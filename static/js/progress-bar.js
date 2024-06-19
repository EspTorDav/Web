/*Llenado de barras de progreso*/
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(function(bar) {
        const percent = parseFloat(bar.getAttribute("data-percent")); // Obtener el porcentaje de la barra de progreso
        bar.style.width = 0 + "%"; // Establecer el ancho inicial de la barra

        let animationPlayed = false;

        // Función para llenar la barra de progreso automáticamente cuando esté en el foco de la ventana
        function fillProgressBar() {

            let currentWidth = 0;
            const animationSpeed = 5; // Velocidad de la animación (ms)

            const fillBar = setInterval(function() {
                currentWidth += 1; // Incrementar el ancho en cada iteración
                bar.style.width = currentWidth + "%";

                if (currentWidth >= percent) {
                    clearInterval(fillBar); // Detener la animación al alcanzar el porcentaje
                }
            }, animationSpeed);
        }

        // Verificar si la barra de progreso está en el foco de la ventana
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Llenar la barra de progreso si está en el foco de la ventana al cargar la página
        if (isElementInViewport(bar) && !animationPlayed) {
            fillProgressBar();
            animationPlayed = true;
        }

        // Añadir un event listener para llenar la barra de progreso cuando entre en el foco de la ventana
        window.addEventListener("scroll", function() {
          if (isElementInViewport(bar) && !animationPlayed) {
              fillProgressBar();
              animationPlayed = true;
          }
        });

    });
});