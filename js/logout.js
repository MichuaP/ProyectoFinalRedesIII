// logout.js
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('usuario'); // Eliminar información del usuario
            alert('Sesión cerrada');
            window.location.reload();
        });
    }
});
