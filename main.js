/* main.js */

// Función para mostrar un mensaje de bienvenida en la consola y como una alerta cuando la página se carga
function mostrarBienvenida() {
    // Imprime un mensaje de bienvenida en la consola del navegador
    console.log("¡Bienvenido/a al sitio del Día del Idioma!");
    // Muestra una alerta con el mensaje de bienvenida
    alert("¡Bienvenido/a al sitio del Día del Idioma!");
}

// Función para mostrar una cita literaria en el elemento con el id "cita"
function mostrarCita() {
    // Define la cita que se mostrará
    const cita = "\"El idioma es la sangre del alma.\" - Oliver Wendell Holmes";
    // Asigna la cita al contenido del elemento con el id "cita"
    document.getElementById("cita").innerText = cita;
}

// Función para cambiar el fondo de la página alternando una clase CSS
function cambiarFondo() {
    // Agrega o elimina la clase "fondo-alterno" al cuerpo de la página
    // Esto permite cambiar el fondo de la página dependiendo del estado de la clase
    document.body.classList.toggle("fondo-alterno");
}

// Función para validar un formulario antes de enviarlo
function validarFormulario() {
    // Obtiene los valores de los campos de nombre y correo
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    // Verifica si los campos están vacíos
    if (!nombre || !correo) {
        // Muestra una alerta si algún campo está vacío
        alert("Por favor, completa todos los campos.");
        // Retorna false para evitar el envío del formulario
        return false;
    }

    // Si todos los campos están completos, muestra un mensaje de éxito
    alert("Formulario enviado con éxito.");
    // Retorna true para permitir el envío del formulario
    return true;
}
