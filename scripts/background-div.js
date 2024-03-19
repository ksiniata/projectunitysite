// Получаем ссылки на все картинки в папке
var images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
  "images/image5.png",
  // Добавьте ссылки на остальные изображения
];

// Получаем случайный индекс из массива с картинками
var randomIndex = Math.floor(Math.random() * images.length);

// Получаем ссылку на фоновый div
var backgroundDiv = document.getElementById("background-div");

// Устанавливаем случайное изображение в качестве фонового изображения
backgroundDiv.style.backgroundImage = "url(" + images[randomIndex] + ")";