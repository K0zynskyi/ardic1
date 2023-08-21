let image = document.getElementById('theme-image');
let styles = getComputedStyle(document.documentElement);

if(window.localStorage.getItem('isLight') == null) window.localStorage.setItem('isLight', 'true');
else if(window.localStorage.getItem('isLight') == 'true') {                         /* LIGHT */
    document.documentElement.style.setProperty('--main-color', '#00a4ee');
    document.documentElement.style.setProperty('--side-color', 'white');
    document.documentElement.style.setProperty('--shadow-color', '#0083bf');
    document.documentElement.style.setProperty('--text-color', 'black');
    document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, 1)');
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--hr-color', 'black');

    image.removeAttribute('src');
    image.setAttribute('src', 'img/Moon.svg');
        /*
            ДОПИСАТЬ ВСЮ СМЕНУ ТЕМЫ
        */ 
}
else if(window.localStorage.getItem('isLight') == 'false') {                        /* DARK */
    document.documentElement.style.setProperty('--main-color', '#1a1a2f');
    document.documentElement.style.setProperty('--side-color', 'white');
    document.documentElement.style.setProperty('--shadow-color', '#0083bf');
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, 1)');
    document.documentElement.style.setProperty('--background-color', '#23153c');
    document.documentElement.style.setProperty('--hr-color', 'white');

    image.removeAttribute('src');
    image.setAttribute('src', 'img/Sun.svg');
        /*
            ДОПИСАТЬ ВСЮ СМЕНУ ТЕМЫ
        */ 
}

window.onscroll = changeHeader;

function changeHeader() {
    let scrolled = window.scrollY || document.documentElement.scrollTop; 
    if(scrolled !== 0){
        if (window.localStorage.getItem('isLight') == 'true') {
            document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, 0.65)');
        } 
        else {
            document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, .5)');
        }
    } 
    else {
        if (window.localStorage.getItem('isLight') == 'true') {
            document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, 1)');
        } 
        else {
            document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, 1)');
        }
    };
};

function changeTheme() {
    if (window.localStorage.getItem('isLight') == 'true') {                         /* DARK */
        document.documentElement.style.setProperty('--main-color', '#1a1a2f');
        document.documentElement.style.setProperty('--side-color', 'white');
        document.documentElement.style.setProperty('--shadow-color', '#0083bf');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, .5)');
        document.documentElement.style.setProperty('--background-color', '#23153c');
        document.documentElement.style.setProperty('--hr-color', 'white');

        image.removeAttribute('src');
        image.setAttribute('src', 'img/Sun.svg');

        window.localStorage.setItem('isLight', 'false');
        changeHeader();
    } else {                                                                        /* LIGHT */
        document.documentElement.style.setProperty('--main-color', '#00a4ee');
        document.documentElement.style.setProperty('--side-color', 'white');
        document.documentElement.style.setProperty('--shadow-color', '#0083bf');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, .65)');
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--hr-color', 'black');

        image.removeAttribute('src');
        image.setAttribute('src', 'img/Moon.svg');

        window.localStorage.setItem('isLight', 'true');
        changeHeader();
    }
}

// ПЛАВНЫЙ СКРОЛЛ       
const menuLinks = document.querySelectorAll('a[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
    }
}











// Light theme
// --main-color: #00a4ee;
// --side-color: white;
// --shadow-color: #0083bf;

// Dark theme
// --main-color: #1a1a2f;
// --side-color: white;
// --shadow-color: #0083bf;