// logout.js
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            localStorage.removeItem('usuario'); // Eliminar información del usuario
            localStorage.removeItem('categoriasUsuario'); // Eliminar categorias
            await Swal.fire({
                title: "Salió de su cuenta",
                text: "Ha salido correctamente su cuenta",
                icon: "success",
                color: "#000000",
                background: "#ffffff",
                customClass: {
                    confirmButton: 'btn-succ',
                    title: 'title-class', 
                    content: 'content-class' 
                },
                buttonsStyling: false,
            });
            window.location.href = 'index.html';
        });
    }
});
