import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import 'slick-carousel';

$(() => {
	svg4everybody();
});

(function () {
	const burger = document.getElementById('burger-button');
	const nav = document.getElementById('navigation');

	burger.addEventListener('click', (e) => {
		e.preventDefault();
		nav.classList.toggle('nav_open');
		burger.classList.toggle('main-menu__burger_open');
	});
})();