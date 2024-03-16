document.addEventListener("scroll", (event) => {
	if(window.scrollY > 50 && document.querySelector("header").classList.length == 0){
		document.querySelector("header").classList.add("scroll");
	}else if(window.scrollY == 0){
		document.querySelector("header").classList.remove("scroll");
	}
});

if(window.scrollY > 50 && document.querySelector("header").classList.length == 0){
	document.querySelector("header").classList.add("scroll");
}