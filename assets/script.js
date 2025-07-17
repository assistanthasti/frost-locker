//header sticky

window.onscroll = function () {
	myFunction()
};

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}


//faq section
const accordionSections = document.querySelectorAll('.accordion-section');
const images = document.querySelectorAll('.image-container img');

accordionSections.forEach((section, index) => {
	section.addEventListener('click', () => {
		accordionSections.forEach((s) => s.classList.remove('active'));
		section.classList.add('active');
		const progress = section.querySelector('.progress');
		progress.style.width = '100%';
		images.forEach((img) => img.classList.remove('active'));
		images[index].classList.add('active');
	});
});


let currentSection = 0;
setInterval(() => {

	accordionSections[currentSection].classList.remove('active');

	const progress = accordionSections[currentSection].querySelector('.progress');
	progress.style.width = '0%';
	currentSection = (currentSection + 1) % accordionSections.length;
	accordionSections[currentSection].classList.add('active');
	const newProgress = accordionSections[currentSection].querySelector('.progress');
	newProgress.style.width = '100%';
	images.forEach((img) => img.classList.remove('active'));
	images[currentSection].classList.add('active');
}, 5000);


//togglemenu responsive
function toggleMenu() {
	document.getElementById('navMenu').classList.toggle('active');
}


//testimonial
const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

function updateSlider(index) {
	track.style.transform = `translateX(-${index * 100}%)`;
	document.querySelectorAll('#dots span').forEach(dot => dot.classList.remove('active'));
	document.querySelectorAll('#dots span')[index].classList.add('active');
}

function createDots() {
	slides.forEach((_, i) => {
		const dot = document.createElement('span');
		dot.addEventListener('click', () => {
			currentIndex = i;
			updateSlider(currentIndex);
		});
		dotsContainer.appendChild(dot);
	});
	updateSlider(currentIndex);
}

createDots();

setInterval(() => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlider(currentIndex);
}, 5000);