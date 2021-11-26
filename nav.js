"use strict"

window.onscroll = (e)=> { 

    let flag = 1;
    const nav = document.querySelector(".nav");
    const edurne = document.querySelector(".edurne");
    const navTitle = document.querySelector(".nav-title");
    const fb = document.querySelector(".fb");

    if(scrollY !== 0 && flag) { /* CAMBIAR NAV AL SCROLLEAR */
        nav.style.background = "rgba(35,84,255,0.7)";
        nav.style.height = "90px";
        edurne.style.top = "15%";
        navTitle.style.fontSize = "5.5vh";
        fb.style.height = "60px";
        fb.style.width = "60px";
        fb.style.top= "15%";
        flag = 0; /* evitar que se ejecute con cada scroll */
    }
    else if (scrollY === 0) { /* VOLVER AL NAV ORIGINAL */
        nav.style.background = "rgb(0,212,255)";
        nav.style.background = "linear-gradient(90deg, rgba(0,212,255,0.9) 0%, rgba(35,84,255,0.9) 50%, rgba(0,212,255,0.9) 100%)";
        nav.style.height = "125px";
        edurne.style.top = "28%";
        navTitle.style.fontSize = "5.9vh";
        fb.style.height = "70px";
        fb.style.width = "70px";
        fb.style.top= "25%";
    }

} 