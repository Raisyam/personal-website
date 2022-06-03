const goToTop = () => {
	document.body.scrollTop = 0; //for safari
	document.documentElement.scrollTop = 0; //for the other browsers
};

const scrollFunction = () => { //kalau misalkan scrollny udah lebih dari 100px, munculin tombol go to top
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById('go-to-up').style.display = "block";
	} else {
		document.getElementById('go-to-up').style.display = "none"; //else, jangan munculin tombolnya
	};
};

window.onscroll = function() {scrollFunction()}; // ini mungkin kayak addEventListener


window.addEventListener('scroll', function() {	// buat style bg color navbar jd gelap kalau scrollnya lebih dari 50
	if (this.scrollY > 50) {
		document.getElementById('my-nav').style.backgroundColor = "#2E3532";
		document.getElementsByClassName('logo')[0].style.color = "#E0E2DB";
		document.getElementsByClassName('nav-lists')[0].style.color = "#E0E2DB";
		document.getElementsByClassName('nav-lists')[1].style.color = "#E0E2DB";
		document.getElementsByClassName('nav-lists')[2].style.color = "#E0E2DB";
		document.getElementsByClassName('nav-lists')[3].style.color = "#E0E2DB";
	} else {
		document.getElementById('my-nav').style.backgroundColor = "transparent";
		document.getElementsByClassName('logo')[0].style.color = "#2e3532";
		document.getElementsByClassName('nav-lists')[0].style.color = "#2E3532";
		document.getElementsByClassName('nav-lists')[1].style.color = "#2E3532";
		document.getElementsByClassName('nav-lists')[2].style.color = "#2E3532";
		document.getElementsByClassName('nav-lists')[3].style.color = "#2E3532";
	};
});