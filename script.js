document.addEventListener('scroll', function () {
	let sections = document.querySelectorAll('section');
	let scrollPosition = document.documentElement.scrollTop;

	section.forEach(section => {
		if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 && scrollPosition < section.offsetTop + section.offsetHeight) { section.style.backgroundColor = '#00ffbb';
		} else {
			section.style.backgroundColor = 'white';
		}
	}};
}};