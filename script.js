/* MOUSE CURSOR */

let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.display = "block";
    mouseCursor.style.top = `${e.pageY}px`;
    mouseCursor.style.left = `${e.pageX}px`;
}

/* DISPLAY ON SCROLL WITH OPACITY REACHING 100% */

const aboutme = document.getElementById('title-about-me');
const portfolio = document.getElementById('title-portfolio');
const contact = document.getElementById('title-contact');

window.addEventListener("scroll", function display_aboutme(){
    if(window.pageYOffset > 1200) {
        aboutme.style.opacity = "100%";
        aboutme.style.transform = "translateY(0)";
        window.removeEventListener("scroll", display_aboutme);
    } else {
        aboutme.style.transform ="translateY(-400px)";
    }
}, false);

window.addEventListener("scroll", function display_portfolio(){
    if(window.pageYOffset > 1800) {
        portfolio.style.opacity = "100%";
        portfolio.style.transform = "translateY(0)";
        window.removeEventListener("scroll", display_portfolio);
    } else {
        portfolio.style.transform ="translateY(-400px)";
    }
}, false);

window.addEventListener("scroll", function display_contact(){
    if(window.pageYOffset > 2800) {
        contact.style.opacity = "100%";
        contact.style.transform = "translateY(0)";
        window.removeEventListener("scroll", display_contact);
    } else {
        contact.style.transform ="translateY(-400px)";
    }
}, false);


/* NAV MENU */

const open_menu = document.getElementById('open-menu');
const close_menu = document.getElementById('close-menu');
const menu = document.getElementById('menu');
const lang = document.getElementById('lang');

open_menu.addEventListener("click", () => {

    menu.classList.toggle('active');
    open_menu.classList.toggle('display');
    lang.classList.toggle('display');
    open_menu.classList.remove('hover')
});

close_menu.addEventListener("click", () => {

    menu.classList.toggle('active');
    open_menu.classList.toggle('display');
    lang.classList.toggle('display');
    open_menu.classList.add('hover');

})

/* CURSOR EVENT MENU */

const li = document.querySelectorAll('li');

li.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.style.width = "1.5rem";
        mouseCursor.style.height = "1.5rem";
        mouseCursor.style.opacity = "50%";
    })

    link.addEventListener('mouseleave', () => {
        mouseCursor.style.width = "3rem";
        mouseCursor.style.height = "3rem";
        mouseCursor.style.opacity = "80%";
    })
} )

/* CURSOR EVENT INPUT */

const input = document.querySelectorAll('.input');

input.forEach(inp => {
    inp.addEventListener('mouseover', () => {
        mouseCursor.style.width = "1.5rem";
        mouseCursor.style.height = "1.5rem";
        mouseCursor.style.border = "black 1px solid";

        inp.addEventListener('mousedown', () => {
            mouseCursor.style.opacity = "50%";
        })

        inp.addEventListener('mouseup', () => {
            mouseCursor.style.opacity = "80%";
        });
    });

    inp.addEventListener('mouseleave', () => {
        mouseCursor.style.width = "3rem";
        mouseCursor.style.height = "3rem";
        mouseCursor.style.border = "white 2px solid";
    })
})

/* CURSOR EVENT CAROUSEL */

const imgsPortfolio = document.querySelectorAll('#imgs-container > img');

imgsPortfolio.forEach(img => {
    img.addEventListener('mouseover', () => {
        mouseCursor.style.backdropFilter = "grayscale()";
    });

    img.addEventListener('mouseleave', () => {
        mouseCursor.style.backdropFilter = "none";
    })
})


/********************************* CAROUSEL *************************/

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const container = document.querySelector('#imgs-container');

let current_slide = 0;
let number_slides = container.children.length;

left.addEventListener('click', () => {
    if(current_slide == 0) {
    current_slide = number_slides - 1;
    container.style.transform = `translateX(${- current_slide * container.offsetWidth}px)`;
} else if(current_slide > 0) {
    current_slide--;
    container.style.transform = `translateX(${current_slide * container.offsetWidth}px)`;
}

})

right.addEventListener('click', () => {

    if(current_slide < number_slides - 1) {
    current_slide++;
    container.style.transform = `translateX(${- current_slide * container.offsetWidth}px)`;
    } else if (current_slide == number_slides - 1) {
        current_slide = 0;
        container.style.transform = `translateX(${- current_slide * container.offsetWidth}px)`;
    } 

})

/* TOP CONTAINER VIDEO & DISPLAY IMG-NAME */

const video = document.getElementsByTagName('video')[0];
const imgName = document.getElementsByClassName('img-name')[0];

video.addEventListener('play', () => {

    video.style.animation = "video-disapear 3s ease-in-out forwards";
    video.style.animationDelay = "9.5s";

    imgName.style.animation = "displaytop 3s ease-out forwards";
    imgName.style.animationDelay = "10s";

setTimeout(function(){
    //video.style.display = "none";
    video.remove();
}, 20000)

});

/* BUTTON BACK TO TOP */

const arrowToTop =  document.querySelector('.backtotop');
const vertical = document.querySelector('.arrow');
const diagonalLeft = document.querySelector('.before');
const diagonalRight = document.querySelector('.after');

arrowToTop.addEventListener('mouseover', () => {
    arrowToTop.style.background = "white";
    vertical.style.background = "#020914";
    diagonalLeft.style.background = "#020914";
    diagonalRight.style.background = "#020914";

    /* transition */
    arrowToTop.style.transition = "all 0.3s ease";

})


arrowToTop.addEventListener('mouseleave', () => {
    arrowToTop.style.background = "none";
    vertical.style.background = "white";
    diagonalLeft.style.background = "white";
    diagonalRight.style.background = "white";
})

arrowToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})