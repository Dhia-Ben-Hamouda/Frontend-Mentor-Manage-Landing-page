const swiper = new Swiper('.swiper', {

	direction: 'horizontal',
	loop: true,
	slidesPerView: window.innerWidth > 680 ? 3 : 1,
	spaceBetween: 24,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	grabCursor: true,
});

const bars = document.querySelector(".bars");

bars.addEventListener("click", (e) => {
	bars.classList.toggle("clicked");
})