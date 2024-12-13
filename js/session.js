// Obtener el usuario y las categorías desde localStorage
let usuario = JSON.parse(localStorage.getItem('usuario'));
let categoriasUsuario = JSON.parse(localStorage.getItem('categoriasUsuario'));

if (usuario) {
    console.log('Usuario logueado:', usuario);
    var span = document.getElementById('userAlias');
    var pagLog = document.getElementById('linkLogin');
    pagLog.style.display = 'none'; // Ocultar el enlace de iniciar sesión
    span.style.display = 'inline'; // Mostrar el elemento de bienvenida

    // Mostrar el alias del usuario y el ícono de cierre de sesión
    span.innerHTML = `Hola, ${usuario.Alias} 
            <a href="#" id="logoutButton" title="Cerrar sesión">
                <i class="fa-solid fa-right-from-bracket" style="color: #ED1C24; margin-left: 10px;"></i>
            </a>`;

    // Mostrar las categorías en el índice
    console.log('Categorías del usuario logueado:', categoriasUsuario);    
}