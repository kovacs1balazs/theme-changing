
function init() {
	button.addEventListener('click' , changeTheme);
	
	
	for (let j=0; j < movies.length; j++ ) {
		
		let cards;
		let button;
		let divCard;
		let divYear;
		let divGenre;
		let divRate;
		let h2;
		let ul;
		let li;
		let root;
		
		divCard = document.createElement("div");
		divYear = document.createElement("div");
		divGenre = document.createElement("div");
		divRate = document.createElement("div");
		h2 = document.createElement("h2");
		ul = document.createElement("ul");
		li = document.createElement("li");
		root = document.getElementById("root");
		
		divCard.setAttribute("id" , "card" +j);
		divCard.setAttribute("data-index" , j);
		divCard.setAttribute("class" , "movie-card light");
		root.appendChild(divCard);
		
		h2.setAttribute("value" , movies[j].title);
		h2.textContent = movies[j].title;
		divCard.appendChild(h2);
		
		divYear.setAttribute("class" , "year");
		divYear.setAttribute("value" , movies[j].year);
		divYear.textContent = movies[j].year;
		divCard.appendChild(divYear);
		
		divGenre.setAttribute("class" , "genre");
		divGenre.setAttribute("value" , movies[j].genre[0]);
		divGenre.textContent = movies[j].genre[0];
		divCard.appendChild(divGenre);
		
		divRate.setAttribute("class" , "rate");
		divRate.setAttribute("value" , movies[j].rate);
		divRate.textContent = movies[j].rate;
		divCard.appendChild(divRate);
		
		
	}
	
	cards = document.querySelectorAll(".light");
	button = document.getElementById("button");
}

function changeTheme() {
	for (let i=0; i < cards.length; i++) {
		cards[i].classList.toggle("light");
		cards[i].classList.toggle("dark");
		
	}
}


window.addEventListener("load" , init);






































/*let element;

function init() {
	let button = document.getElementById("button");
	element = document.getElementsByClassName("movie-card-light");
	button.addEventListener("click" , changeTheme);
}

function changeTheme() {
	element.classList.add("dark");
}*/
