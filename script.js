// const btnOne = document.getElementById("btn-1");
// const btnTwo = document.getElementById("btn-2");
const buttonList = document.getElementById("button-list");
const btnBack = document.getElementById("back-btn");
// const projectOne = document.getElementById("project-1");
// const projectTwo = document.getElementById("project-2");
const allShow = document.getElementsByClassName("show");
const projectList = document.getElementsByClassName("project");

//create buttons for all projects
console.log(projectList);

for (let i = 0; i < projectList.length; i++) {
	console.log(i);
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

// btnOne.addEventListener("click", () => {
// 	projectOne.classList.remove("hide");
// 	projectOne.classList.add("show");
// });

// btnTwo.addEventListener("click", () => {
// 	projectTwo.classList.remove("hide");
// 	projectTwo.classList.add("show");
// });

btnBack.addEventListener("click", () => {
	for (let i = 0; i < allShow.length; i++) {
		allShow[i].classList.add("hide");
		allShow[i].classList.remove("show");
	}
});
