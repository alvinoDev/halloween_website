/* ================================ SHOW MENU =============================== */
const nav_menu = document.getElementById('nav_menu'),
    nav_toggle = document.getElementById('nav_toggle'),
    nav_close = document.getElementById('nav_close');

// MENU SHOW
if(nav_toggle){
    nav_toggle.addEventListener('click', () => {
        nav_menu.classList.add('show_menu');
    });
}

//MENU HIDDEN
if(nav_close){
    nav_close.addEventListener('click', () => {
        nav_menu.classList.remove('show_menu');
    })
}

/* =========================== REMOVE MENU MOBILE =========================== */
const nav_link = document.querySelectorAll('.nav_link');

function linkAction() {
    const nav_menu = document.getElementById('nav_menu');
    nav_menu.classList.remove('show_menu');
}
nav_link.forEach(n => n.addEventListener('click', linkAction));

/* =============================== HOME SWIPER ============================== */
let home_swiper = new Swiper(".home_swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

/* ======================== CHANGE BACKGROUND HEADER ======================== */
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll_header');
    else header.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader);

/* =============================== NEW SWIPER =============================== */
let new_swiper = new Swiper(".new_swiper", {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: 'true'
});

/* ======================= SCROLL SECTIONS ACTIVE LINK ====================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {

    const scroll_y = window.pageYOffset;
    
    sections.forEach( current => {
        const section_height = current.offsetHeight;
        const section_top = current.offsetTop - 50;
        const section_id = current.getAttribute('id');

        if( scroll_y > section_top && scroll_y <= section_top + section_height){
            document.querySelector('.nav_menu a[href*='+ section_id +']').classList.add('active_link');
        }else {
            document.querySelector('.nav_menu a[href*='+ section_id +']').classList.remove('active_link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ============================= SHOW SCROLL UP ============================= */
const scroll_up = document.getElementById('scroll_up');
function scrollUp() {
    if(this.scrollY >= 350) scroll_up.classList.add('show_scroll');
    else scroll_up.classList.remove('show_scroll');
}

scroll_up.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
    });
});

window.addEventListener('scroll', scrollUp);

/* ========================= SCROLL REVEAL ANIMATION ======================== */
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    // reset: true
});

sr.reveal('.home_swiper, .new_swiper, .newsletter_container');
sr.reveal('.category_data, .trick_content, .footer_content',{interval:100});
sr.reveal('.about_data, .discount_img', {origin: 'left'});
sr.reveal('.about_img, .discount_data', {origin: 'right'});

/* =========================== DARK / LIGHT THEME =========================== */
const theme_button = document.getElementById('theme_button');
const dark_theme = 'dark_theme';
const icon_theme = 'bx-sun';

const selected_theme = localStorage.getItem('selected_theme');
const selected_icon = localStorage.getItem('selected_icon');

const get_current_theme = () => document.body.classList.contains(dark_theme) ? 'dark' : 'light';
const get_current_icon = () => document.body.classList.contains(dark_icon) ? 'bx-moon' : 'bx-sun';

if(selected_theme) {
    document.body.classList[selected_theme === 'dark' ? 'add' : 'remove'](dark_theme);
    theme_button.classList[selected_icon === 'bx-moon' ? 'add' : 'remove'](icon_theme);
}

theme_button.addEventListener('click', () => {
    document.body.classList.toggle(dark_theme);
    theme_button.classList.toggle(icon_theme);
    localStorage.setItem('selected_theme', get_current_theme);
    localStorage.setItem('selected_icon', get_current_icon);
})