var slideControl1 = document.querySelector(".slide1-control");

var slideControl2 = document.querySelector(".slide2-control");

var slideControl3 = document.querySelector(".slide3-control");

var showContainer = document.querySelector(".show-container");

slideControl1.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideControl1.classList.add("active");
	slideControl2.classList.remove("active");
	slideControl3.classList.remove("active");
	if(showContainer.classList.contains("show-slide2")) {
		showContainer.classList.remove("show-slide2");
	}

	if(showContainer.classList.contains("show-slide3")) {
		showContainer.classList.remove("show-slide3");
	}

	showContainer.classList.add("show-slide1");
});

slideControl2.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideControl1.classList.remove("active");
	slideControl2.classList.add("active");
	slideControl3.classList.remove("active");
	if(showContainer.classList.contains("show-slide1")) {
		showContainer.classList.remove("show-slide1");
	}

	if(showContainer.classList.contains("show-slide3")) {
		showContainer.classList.remove("show-slide3");
	}
	
	showContainer.classList.add("show-slide2");
});

slideControl3.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideControl1.classList.remove("active");
	slideControl2.classList.remove("active");
	slideControl3.classList.add("active");
	if(showContainer.classList.contains("show-slide1")) {
		showContainer.classList.remove("show-slide1");
	}

	if(showContainer.classList.contains("show-slide2")) {
		showContainer.classList.remove("show-slide2");
	}
	
	showContainer.classList.add("show-slide3");
});