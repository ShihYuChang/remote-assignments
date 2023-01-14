// Change the text in the banner
const Banner = document.querySelector('.welcome_banner');
const BannerText = document.querySelector('.welcome_banner h1');

Banner.addEventListener('click',() => {
    if ( BannerText.textContent === 'Have a Good Time!') {
        BannerText.textContent = 'Welcome Message!';
    }

    else {
        BannerText.textContent = 'Have a Good Time!';
    }
    
});

// Click menu icon to extend the right bar menu
const menuIcon = document.getElementById('menu_icon');
const exitIcon = document.getElementById('exitIcon');
const rightMenu = document.querySelector('.hiddenRightMenu');

menuIcon.addEventListener('click', () => {
    rightMenu.style.display = 'block';
    exitIcon.style.display = 'block';
});

// Click X to fold the right bar menu


exitIcon.addEventListener('click', () => {
    rightMenu.style.display = 'none';
    exitIcon.style = 'none';
});


// Click 'Call to Action' button to show the four hidden boxes
const button = document.querySelector('.btn');
const hiddenBoxes = document.querySelector('.hiddenBox');

button.addEventListener('click', () => {
    if ( hiddenBoxes.style.display === 'flex') {
        hiddenBoxes.style.display = 'none';
    }

    else {
        hiddenBoxes.style.display = 'flex';
    }

});
