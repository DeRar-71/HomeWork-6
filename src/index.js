import './main.scss';

const navIcon = document.querySelector('.navigation__icon');
const navigation = document.querySelector('.navigation-mobile');

navIcon.addEventListener('click', () => {
    navigation.classList.toggle('navigation-mobile--active');
})