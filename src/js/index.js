// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination} from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
	slidesPerView: 7,
	// spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
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


// navigation
const menuLinks = document.querySelectorAll('.nav-menu__link[data-goto]');
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
		const goToBlock = document.querySelector(menuLink.dataset.goto)

		const onMenuLinkClick = (event) => {
			event.preventDefault();

			if (event.target.dataset.goto && goToBlock) {
				const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.navigation').offsetHeight;

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