document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto
  
    // Lógica para enviar el formulario con EmailJS (reemplaza con tus datos)
    emailjs.sendForm('service_7u424el', 'template_abndb27', this)
      .then(function() {
        Swal.fire({
            title: '¡Mensaje enviado!',
            text: 'Gracias por tu mensaje. Te responderemos pronto.',
            icon: 'success',
            confirmButtonColor: '#94E2D5', /* Color verde de Catppuccin Mocha */
            background: '#11111B', /* Color de fondo Surface0 */
            color: '#CDD6F4', /* Color de texto Text */
          });
          form.reset();
        }, function(error) {
          Swal.fire({
            title: 'Error',
            text: 'Ooops... algo salió mal. Por favor, intenta de nuevo.',
            icon: 'error',
            confirmButtonColor: '#F28FAD', /* Color rosa de Catppuccin Mocha */
            background: '#11111B', /* Color de fondo Surface0 */
            color: '#CDD6F4', /* Color de texto Text */
          });
        });
    });