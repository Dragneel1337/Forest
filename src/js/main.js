const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__box');
const allNavItems = document.querySelectorAll('.nav__box--item');
const footerYear = document.querySelector('.time');

const year = new Date();
footerYear.textContent = year.getFullYear();

const handleNav = () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('show-nav')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('show-nav')
            burgerBtn.classList.remove('active')
        })
    });
    handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}



burgerBtn.addEventListener('click', handleNav)

