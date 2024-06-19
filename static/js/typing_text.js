/* Funcion para el texto del h2*/
document.addEventListener("DOMContentLoaded", function () {
    const messages = [
      "Mi nombre es David Espinosa",
      "Soy QA tester y desarrollador en Python",
      "En mi tiempo libre desarrollo mis proyectos",
      "Desliza hacia abajo o navega por el menú para saber más",
      "Bienvenido a mi web",
    ];
    const container = document.getElementById("indexMessage");
    let currentMessageIndex = 0;
    let currentCharIndex = 0;

    function type() {
      const currentMessage = messages[currentMessageIndex];
      const beforeChar = currentMessage.substring(0, currentCharIndex);
      const currentChar = currentMessage[currentCharIndex];
      
      container.innerHTML =
        beforeChar + `<span class="typing-letter">${currentChar}</span>`;
      currentCharIndex++;

      if (currentCharIndex === currentMessage.length) {
        setTimeout(() => {
          currentCharIndex = 0;
          currentMessageIndex = (currentMessageIndex + 1) % messages.length;
          setTimeout(type, 1500); // Tiempo antes de empezar a escribir el siguiente mensaje
        }, 1000); // Espera 1 segundo antes de borrar el mensaje
      } else {
        setTimeout(type, 120); // Velocidad de escritura
      }
    }
    type();
  });