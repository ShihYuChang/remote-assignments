// Change the text in the banner
const BannerText = document.querySelector('.welcome_banner h1');

BannerText.addEventListener('click',() => {
    if (BannerText.textContent === 'Welcome Message') {
        BannerText.textContent = 'Have a Good Time!';
    }

    else {
        BannerText.textContent = 'Welcome Message';
    }
    
});

// Click menu icon to extend the right bar menu
const menuIcon = document.getElementById('menu_icon');
const exitIcon = document.getElementById('exitIcon');
const Menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    Menu.style.display = 'block';
    exitIcon.style.display = 'block';
});

// Click X to fold the right bar menu


exitIcon.addEventListener('click', () => {
    Menu.style.display = 'none';
    exitIcon.style = 'none';
});
