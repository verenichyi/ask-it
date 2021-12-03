import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
	slidesPerView: 7,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1500: {
			slidesPerView: 5,
		},
		2000: {
			slidesPerView: 6,
		},
		2400: {
			slidesPerView: 7,
		}
	}
});

const navigationBlock = document.querySelector('.navigation');

const navMenuList = document.querySelector('.nav-menu__list');

const menuLinks = document.querySelectorAll('.nav-menu__link[data-goTo]');
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

if (menuIcon) {
	const onMenuIconClick = (event) => {
		document.body.classList.toggle('lock');
		menuIcon.classList.toggle('active');
		navMenu.classList.toggle('active');
	};

	menuIcon.addEventListener('click', onMenuIconClick);
}

if (menuLinks) {
	menuLinks.forEach(menuLink => {
		const goToBlock = document.querySelector(menuLink.dataset.goTo)

		const onMenuLinkClick = (event) => {
			event.preventDefault();

			const targetGoToLink = event.target.dataset.goTo;

			if (targetGoToLink && goToBlock) {
				const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - navigationBlock.offsetHeight;

				navMenu.classList.toggle('active');

				window.scrollTo({
					top: goToBlockValue,
					behavior: "smooth"
				})
			}
		};

		menuLink.addEventListener('click', onMenuLinkClick);
	})
}