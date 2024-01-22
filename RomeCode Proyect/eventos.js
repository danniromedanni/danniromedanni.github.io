function moverCard(elemento) {
    elemento.style.transform = "translateY(-20px)"; // Puedes ajustar la cantidad de movimiento aquí
    elemento.style.transition = "transform 0.3s ease";
}

function restaurarCard(elemento) {
    elemento.style.transform = "translateY(0)";
}