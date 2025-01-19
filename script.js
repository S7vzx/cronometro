function updateTimer() {
    const startDate = new Date("2022-02-22T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    
    requestAnimationFrame(updateTimer); // Requisita a próxima atualização
}

requestAnimationFrame(updateTimer); // Inicia o cronômetro


const photo = document.getElementById("photo");
const photos = [
    "img/foto1.png",
    "img/foto2.png",
    "img/foto3.png",
    "img/foto4.png",
    "img/foto5.png"
];
let currentPhotoIndex = 0;

photo.addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photo.src = photos[currentPhotoIndex];
});
photo.addEventListener("click", () => {
    photo.style.opacity = 0.5; // Torna a imagem semi-transparente
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photo.src = photos[currentPhotoIndex];
    photo.onload = () => {
        photo.style.opacity = 1; // Restaura a opacidade quando a nova imagem carregar
    };
});
function typeMessage() {
    const message = "Você é a melhor coisa que me aconteceu!";
    let index = 0;
    const element = document.getElementById("message");
    const interval = setInterval(() => {
        element.innerHTML += message[index];
        index++;
        if (index === message.length) {
            clearInterval(interval);
        }
    }, 100);
}
document.getElementById("musicButton").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?app=desktop&v=izGwDsrQ1eQ";
});
function typeMessage() {
    const message = "Você é a melhor coisa que me aconteceu!";
    let index = 0;
    const element = document.getElementById("message");
    const interval = setInterval(() => {
        element.innerHTML += message[index];
        index++;
        if (index === message.length) {
            clearInterval(interval);
        }
    }, 100);
}

window.onload = typeMessage;