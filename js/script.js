document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    emailjs.sendForm('service_7u424el', 'template_abndb27', this)
      .then(function() {
        Swal.fire({
            title: '¡Message Sent!',
            text: 'Thank you for your message. We will get back to you soon.',
            icon: 'success',
            confirmButtonColor: '#94E2D5', 
            background: '#11111B', 
            color: '#CDD6F4', 
          });
          form.reset();
        }, function(error) {
          Swal.fire({
            title: 'Error',
            text: 'Ooops... something went wrong. Please try again.',
            icon: 'error',
            confirmButtonColor: '#F28FAD', 
            background: '#11111B', 
            color: '#CDD6F4', 
          });
        });
    });