let form = document.querySelector("form");

let div = document.getElementsByClassName("form");
let button = document.getElementsByTagName("button");
let indicate = document.querySelector('.page-indicator');
// console.log(button);

let curPage = 0;
let emn = indicate.getElementsByTagName("em");

window.onload = createIndicator(curPage);
form.onsubmit = () => { return false; }

function createIndicator(page) {
	for (var i = 0; i < div.length; i++) {
		const em = document.createElement("em");
		em.id = i;
		if (i == 0) {
			em.className = 'cur-page';
		}
		indicate.appendChild(em);
	}
}


button[1].onclick = () => {
	validate();
}

button[0].onclick = () => {
	if (curPage > 0) {
		curPage--;
	}
	if (curPage < 1) {
		// button[0].style.display = "none";
	}

	displayPage(curPage);
	activeIndicator(curPage);
}


displayPage(curPage);

function displayPage(page) {
	for (let i of div) {
		i.classList.remove('active');
	}
	div[page].classList.add('active');
}

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

function telephoneCheck(str) {
	var patt = new RegExp(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
	);
	return patt.test(str);
}

function validate() {
	const activePage = document.querySelector(".active");
	const field = activePage.getElementsByClassName('field');
	let input1 = field[0].children[0];
	let input2 = field[1].children[0];
	let input3 = field[2].children[0];
	let input4 = field[3].children[0];
	// console.log(input1);
	// console.log(input2);
	// console.log(input3);

	if (input1.value.length >= 2 && input2.value.length >= 2 && validateEmail(input3.value) && telephoneCheck(input4.value)) {
		curPage++;
		button[0].style.display = 'block';
		if (curPage >= div.length) {
			form.onsubmit = () => { return true; }
		}

		displayPage(curPage);
		activeIndicator(curPage);
	}

}


function activeIndicator(page) {
	for (let i of emn) {
		i.classList.remove('cur-page');
	}
	emn[page].classList.add('cur-page');
}

