const buttonList = document.getElementById("button-list");
const btnBack = document.getElementById("back-btn");
const allShow = document.getElementsByClassName("show");
const projectList = document.getElementsByClassName("project");
const createButton = document.getElementById("create");
const createSection = document.getElementById("create-project");
const settingSection = document.getElementById("settings-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const handedSelect = document.getElementById("which_handed");
const controls = document.getElementsByClassName("controls");

//create buttons for all projects
for (let i = 0; i < projectList.length; i++) {
	let btn = document.createElement("button");
	btn.id = `btn-${i + 1}`;
	btn.classList.add("project-btn");
	btn.innerText = `project ${i + 1}`;
	buttonList.appendChild(btn);
}

const projectButtons = document.getElementsByClassName("project-btn");

for (let i = 0; i < projectButtons.length; i++) {
	projectButtons[i].addEventListener("click", () => {
		let project = document.getElementById(`project-${i + 1}`);
		project.classList.remove("hide");
		project.classList.add("show");
	});
}

// listen for hide button

btnBack.addEventListener("click", () => {
	for (let i = 0; i < allShow.length; i++) {
		allShow[i].classList.add("hide");
		allShow[i].classList.remove("show");
	}
});

createButton.addEventListener("click", () => {
	createSection.classList.remove("hide");
	createSection.classList.add("show");
});

hamburgerIcon.addEventListener("click", () => {
	if (settingSection.classList.contains("show")) {
		settingSection.classList.remove("show");
		settingSection.classList.add("hide");
	} else {
		settingSection.classList.remove("hide");
		settingSection.classList.add("show");
	}
});

// Toggle left & right handed
handedSelect.addEventListener("change", () => {
	if (handedSelect.value == "right") {
		console.log("right");

		for (let i = 0; i < controls.length; i++) {
			controls[i].classList.add("right-handed");
			if (controls[i].classList.contains("left-handed")) {
				controls[i].classList.remove("left-handed");
			}
		}
	} else if (handedSelect.value == "left") {
		console.log("left");

		for (let i = 0; i < controls.length; i++) {
			controls[i].classList.add("left-handed");
			if (controls[i].classList.contains("right-handed")) {
				controls[i].classList.remove("right-handed");
			}
		}
	}
});
