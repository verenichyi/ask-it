import {swiper} from './swiper';

const navigationBlock = document.getElementById('navigation');
const menuList = document.getElementById('menu-list');
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

const onMenuIconClick = () => {
	document.body.classList.toggle('lock');
	menuIcon.classList.toggle('active');
	navMenu.classList.toggle('active');
}

const onMenuLinkClick = (event) => {
	event.preventDefault();

	const goToBlock = document.querySelector(event.target.dataset.goto);

	if (goToBlock) {
		const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - navigationBlock.offsetHeight;

		navMenu.classList.toggle('active');

		window.scrollTo({
			top: goToBlockValue,
			behavior: "smooth"
		})
	}
};

menuIcon.addEventListener('click', onMenuIconClick);
menuList.addEventListener('click', onMenuLinkClick);
