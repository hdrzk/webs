function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
  
 // DARK / LIGHT MODE
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

// Set default to dark if no theme is set
if (!currentTheme || currentTheme === "dark") {
    setDarkMode();
} else if (currentTheme === "light") {
    setLightMode();
}

btn.addEventListener("click", function () {
    setTheme();
});

btn2.addEventListener("click", function () {
    setTheme();
});

function setTheme() {
    let currentTheme = document.body.getAttribute("theme");

    if (currentTheme === "light") {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-dark");
    });
}

function setLightMode() {
    document.body.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });
}


function showModal(imageSrc) {
    var modal = document.getElementById("certificate-modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById("certificate-modal");
    modal.style.display = "none";
  }
  

const favicon = document.querySelector('link[rel="icon"]');
const theme = document.body.getAttribute('theme');

    if (theme === 'light') {
        favicon.href = 'favicon-hitam.png';
    } else {
        favicon.href = 'favicon-putih.png';
}