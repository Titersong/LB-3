const imageList = document.getElementById("imageList");
const img = document.getElementById("mainImage");
const titles = [
    "Shin Megami Tensei: Persona",
    "Persona 2: Innocent Sin",
    "Persona 2: Eternal Punishment",
    "Persona 3",
    "Persona 3 FES",
    "Persona 4",
    "Persona 4 Golden",
    "Persona 5",
    "Persona 5 Royal",
    "Persona 3 Reload",
    "Persona 4 Revival"
];

for (let i = 1; i <= 11; i++) {
    let li = document.createElement("li");
    li.textContent = titles[i - 1];
    li.onclick = () => changeImage(i);
    imageList.appendChild(li);
}

function changeImage(num) {
    img.src = `images/${num}.png`;
    img.alt = titles[num - 1];
}

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
