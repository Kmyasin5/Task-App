function newTask() {
	const tasks = document.querySelector("#newTask").value;

	if (tasks === "") {
		alert("You must write something!");
	}

	let len = tasks.length;

	let task = "";
	for (i = 0; i < len; i++) {
		newTask[i];
		let taskitems = newTask[i];
		let li = `<li class = list-group-item>${taskitems}</li>`;
		taskitems += li;
	}
	console.log(task);
	document.getElementById("#displayList").innerHTML = task;
}
