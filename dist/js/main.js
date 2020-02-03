// Select DOM (Document object model) Items
const menuBtn = document.querySelector('.menu-btn'); //creating a variable named menuBtn and setting its value to document property using query selector method to select any class/ids/elements etc
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item'); //to select all the items f nav i.e home, about me, my work, how to reach me

// Set Initial state of menu
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    }

    else{

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;

    }
}
