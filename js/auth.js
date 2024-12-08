document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado.');

    let usuario = localStorage.getItem('usuario');
    console.log('Usuario encontrado:', usuario);

    if (!usuario) {
        console.log('Redirigiendo a iniciar sesión...');
        window.location.href = 'iniciar_sesion.html';
    }
});

