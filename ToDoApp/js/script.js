const months = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];


document.addEventListener("DOMContentLoaded", function () {
	const taskText = document.querySelector(".taskText");
	const taskData = document.querySelector(".taskData");
	const taskAddBtn = document.querySelector(".taskAddBtn");
	const tasks = document.querySelector(".tasks");

	function getFormattedDate(dateStr) {
		const dateParts = dateStr.split("-");
		const month = parseInt(dateParts[1]);
		const day = parseInt(dateParts[2]);

		if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
			return "";
		}

		const monthName = months[month - 1];
		return monthName + ", " + day;
	}

	function addTask() {
		if (taskText.value) {
			let dataConv = getFormattedDate(taskData.value);

			let newTask = document.createElement("div");
			newTask.classList.add("task");
			newTask.innerHTML = `
				<div>
				<p>${taskText.value}</p>
				<p>${dataConv}</p>
				</div>
				<div class = "taskNav">
				<div class="done"><img src="img/done.svg" alt=""></div>
				<div class="close"><img src="img/del.svg" alt=""></div>
				</div>
			`;

			tasks.appendChild(newTask);

			taskText.value = "";
			taskData.value = "";

			let close = newTask.querySelector(".close");
			close.addEventListener("click", del);

			let done = newTask.querySelector(".done");
			done.addEventListener("click", complete);

		} else {
			alert("Error! Fill in the field!");
		}
	}

	taskAddBtn.addEventListener("click", addTask);

	function del() {
		const parentDel = this.parentNode.parentNode;
		parentDel.remove();
	}

	function complete() {
		const parentDone = this.parentNode.parentNode;
		parentDone.classList.add('line');

		const doneImg = parentDone.querySelector(".done img");
		doneImg.src = "img/1.svg";
	}

});


