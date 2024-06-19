 /* Funcion de redirección de enlaces */
 document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const url = this.getAttribute("href"); // Obtener la URL del atributo href
        window.location.href = url; // Redirigir a la URL correspondiente
      });
    });
  });