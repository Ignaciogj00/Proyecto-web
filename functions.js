function cargarPantalla() {

    // Solicitar la fecha de nacimiento al cargar la página
    var birthDate = prompt("Por favor, introduce tu fecha de nacimiento (MM-DD-YYYY):");

    // Verificar si el usuario es mayor de edad
    var currentDate = new Date();
    var userDate = new Date(birthDate);
    var age = currentDate.getFullYear() - userDate.getFullYear();

    // Si el usuario es menor de edad, recargar la página
    if (age < 18) {
        alert("Lo sentimos, esta página está destinada solo para mayores de edad.");
        location.reload();
    }

    // Aplicar el color de fondo al botón de compra/reserva
    var buyButton = document.querySelector("button");
    if (buyButton) {
        buyButton.style.backgroundColor = backgroundColor;
    }
}
