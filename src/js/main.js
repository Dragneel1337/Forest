const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav__item')


const handleNav = () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
            burgerBtn.classList.remove('active')
        })
    });
}



burgerBtn.addEventListener('click', handleNav)

