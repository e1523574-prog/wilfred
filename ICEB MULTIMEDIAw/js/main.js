// ===============================
// iCEB Multimedia Main JS
// ===============================

// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Sticky Navbar

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// Back To Top

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if(backTop){

        if(window.scrollY > 500){

            backTop.classList.add("show");

        }else{

            backTop.classList.remove("show");

        }

    }

});

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

let start=0;

const end=+counter.dataset.target;

const speed=25;

const update=()=>{

start+=Math.ceil(end/120);

if(start<end){

counter.innerText=start;

setTimeout(update,speed);

}else{

counter.innerText=end;

}

}

update();

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
