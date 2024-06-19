
    // Ajustar altura de la sección de habilidades
      function adjustSkillsHeight() {
        const headerHeight = document.querySelector("header").offsetHeight;
        const footerHeight = document.querySelector("footer").offsetHeight;
        const windowHeight = window.innerHeight;
        const skillsContainer = document.getElementById("skills-container");
        skillsContainer.style.height =
          windowHeight - headerHeight - footerHeight + "px";
      }

    // Llamar a la función al cargar y redimensionar la ventana
      window.addEventListener("load", adjustSkillsHeight);
      window.addEventListener("resize", adjustSkillsHeight);

    // Desplazamiento suave al hacer scroll
      document.addEventListener("DOMContentLoaded", () => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > window.innerHeight / 2) {
            document
              .querySelector(".skills-container")
              .scrollIntoView({ behavior: "smooth" });
          }
        });
      });
