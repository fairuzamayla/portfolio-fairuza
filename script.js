// ==============================
// AOS Animation
// ==============================

AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 120
});

// ==============================
// Typing Effect
// ==============================

const text = [
    "Web Developer",
    "Data Analyst",
    "Frontend Developer",
    "UI/UX Designer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    let currentText = text[textIndex];

    if (!isDeleting) {

        typing.innerHTML = currentText.substring(0, charIndex++);
    } else {

        typing.innerHTML = currentText.substring(0, charIndex--);
    }

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentText.length + 1) {

        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        textIndex++;

        if (textIndex >= text.length) {

            textIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ==============================
// GSAP Scroll Animation
// ==============================

gsap.registerPlugin(ScrollTrigger);

// Foto
gsap.from(".about-left",{
    x:-120,
    opacity:0,
    duration:1.2,
    ease:"power3.out",
    scrollTrigger:{
        trigger:"#about",
        start:"top 75%",
        toggleActions:"restart none restart reset"
    }
});

// Isi
gsap.from(".about-right",{
    x:120,
    opacity:0,
    duration:1.2,
    ease:"power3.out",
    scrollTrigger:{
        trigger:"#about",
        start:"top 75%",
        toggleActions:"restart none restart reset"
    }
});

// Judul
gsap.from(".about-title",{
    y:50,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#about",
        start:"top 75%",
        toggleActions:"restart none restart reset"
    }
});

// Web Developer
gsap.from(".about-job",{
    scale:0.5,
    opacity:0,
    duration:0.8,
    delay:.2,
    scrollTrigger:{
        trigger:"#about",
        start:"top 75%",
        toggleActions:"restart none restart reset"
    }
});

// Paragraf
gsap.from(".about-desc",{
    y:40,
    opacity:0,
    duration:1,
    delay:.4,
    scrollTrigger:{
        trigger:"#about",
        start:"top 75%",
        toggleActions:"restart none restart reset"
    }
});


//about//
const aboutImages = [
    "gambar/fairuza.jpeg",
    "gambar/fairuza1.jpeg",
    "gambar/fairuza2.jpeg",
    
];

let currentImage = 0;

function changeAboutImage(){

    currentImage++;

    if(currentImage >= aboutImages.length){
        currentImage = 0;
    }

    document.getElementById("aboutImage").src = aboutImages[currentImage];

}

setInterval(changeAboutImage, 3000);


const aboutImg = document.getElementById("aboutImage");

function changeAboutImage(){

    aboutImg.style.opacity = 0;

    setTimeout(()=>{

        currentImage++;

        if(currentImage >= aboutImages.length){
            currentImage = 0;
        }

        aboutImg.src = aboutImages[currentImage];
        aboutImg.style.opacity = 1;

    },300);

}

setInterval(changeAboutImage,3000);
// ==============================
// Navbar Scroll
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "#0B5ED7";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
        navbar.style.padding = "10px 0";

    } else {

        navbar.style.background = "#0d6efd";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "15px 0";
    }

});

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==============================
// Active Navbar
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");
        }

    });

});

// ==============================
// Fade Card Project
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = ".4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==============================
// Hero Image Animation
// ==============================

const heroImg = document.querySelector(".hero-img");

if (heroImg) {

    setInterval(() => {

        heroImg.animate([

            { transform: "translateY(0px)" },

            { transform: "translateY(-10px)" },

            { transform: "translateY(0px)" }

        ], {

            duration: 2000

        });

    }, 2000);

}

// ==============================
// Console Message
// ==============================

console.log("%cWebsite dibuat oleh Fairuza Mayla 🚀",
"color:#0d6efd;font-size:18px;font-weight:bold;");

// ==============================
// Dark Mode
// ==============================

const darkBtn = document.getElementById("darkModeToggle");

// Cek apakah sebelumnya dark mode aktif
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");
    darkBtn.innerHTML = "☀️";

}

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");
        darkBtn.innerHTML="☀️";

    }else{

        localStorage.setItem("theme","light");
        darkBtn.innerHTML="🌙";

    }

});