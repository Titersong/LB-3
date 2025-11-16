// Генерація списку зображень
const imageList = document.getElementById("imageList");
const img = document.getElementById("mainImage");

for (let i = 1; i <= 9; i++) {
    let li = document.createElement("li");
    li.textContent = "Зображення " + i;
    li.onclick = () => changeImage(i);
    imageList.appendChild(li);
}

// Функція зміни зображення
function changeImage(num) {
    img.src = `images/${num}.png`;
    img.alt = `Зображення ${num}`;
}

// Функція зміни параметрів
function applySettings() {
    const width = document.getElementById("imgWidth").value;
    const height = document.getElementById("imgHeight").value;
    const border = document.getElementById("imgBorder").value;
    const alt = document.getElementById("imgAlt").value;

    img.style.width = width + "px";
    img.style.height = height + "px";
    img.style.borderWidth = border + "px";
    img.alt = alt;
}
