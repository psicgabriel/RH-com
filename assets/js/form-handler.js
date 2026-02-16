document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.php-email-form');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Evita que la página recargue
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
  
        if (response.ok) {
          alert('Tu mensaje ha sido enviado. ¡Gracias!');
          form.reset(); // Limpia los campos del formulario
        } else {
          alert('Ocurrió un error. Inténtalo de nuevo.');
        }
      } catch (error) {
        alert('Ocurrió un problema con el envío.');
      }
    });
  });
  