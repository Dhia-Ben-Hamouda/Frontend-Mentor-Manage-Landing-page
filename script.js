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
const overlay = document.querySelector(".overlay");

bars.addEventListener("click", (e) => {
	bars.classList.toggle("clicked");
	overlay.classList.remove("hidden");
})

overlay.addEventListener("click" , (e) => {
	if(e.target === overlay){
		bars.classList.toggle("clicked");
		overlay.classList.add("hidden");
	}
})