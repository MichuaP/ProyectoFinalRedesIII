// Obtener usuario (LocalStorage)
let usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario) {
    console.log('Usuario logueado:', usuario);
    var span = document.getElementById('userAlias');
    var pagLog = document.getElementById('linkLogin');
    pagLog.style.display = 'none'; //Ocultar le iniciar sesión
    span.style.display = 'inline'; // Mostrar el elemento
    //poner el display que se vea
    span.innerHTML = `${usuario.Nombre} 
            <a href="#" id="logoutButton" title="Cerrar sesión">
                <i class="fa-solid fa-right-from-bracket" style="color: #ff0000; margin-left: 10px;"></i>
            </a>`;
}
