import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

export const swiper = new Swiper('.swiper', {
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