document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  const fechaInput = document.getElementById("fecha");
  const confirmationMessage = document.getElementById("confirmationMessage");

  // Configurar fecha mínima como la fecha actual
  const hoy = new Date().toISOString().split("T")[0];
  if (fechaInput) {
    fechaInput.setAttribute("min", hoy);
  }

  // Manejo del envío del formulario
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Captura de datos del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Construcción del mensaje predefinido para WhatsApp
    const mensajeWhatsApp =
      `Hola, Consultorio Eco Salud. Deseo confirmar mi cita:%0A` +
      `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
      `*Teléfono:* ${encodeURIComponent(telefono)}%0A` +
      `*Estudio:* ${encodeURIComponent(servicio)}%0A` +
      `*Fecha:* ${encodeURIComponent(fecha)}%0A` +
      `*Hora:* ${encodeURIComponent(hora)}`;

    // Número destino (Se reemplaza por el WhatsApp del consultorio)
    const numeroWhatsApp = "59100000000"; // Reemplazar por el número real del Dr. Alonso

    // Ocultar formulario y mostrar confirmación local
    bookingForm.style.display = "none";
    confirmationMessage.style.display = "block";

    // Redirigir a WhatsApp después de 1.5 segundos
    setTimeout(() => {
      window.open(
        `[suspicious link removed]{numeroWhatsApp}?text=${mensajeWhatsApp}`,
        "_blank",
      );
    }, 1500);
  });
});
