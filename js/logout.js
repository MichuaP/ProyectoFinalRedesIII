// logout.js
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            localStorage.removeItem('usuario'); // Eliminar información del usuario
            await Swal.fire({
                title: "Salió de su cuenta",
                text: "Ha salido correctamente su cuenta",
                color: "#000000",
                background: "#ffffff",
                customClass: {
                    confirmButton: 'btn-succ',
                    title: 'title-class', 
                    content: 'content-class' 
                },
                buttonsStyling: false,
            });
            window.location.reload();
        });
    }
});
