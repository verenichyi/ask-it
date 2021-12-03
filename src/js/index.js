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
