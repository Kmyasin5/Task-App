function ticketAdd() {
	event.preventDefault();

	const name = document.querySelector("#name").value;

	console.log("Name" + name);

	if (name == null || name.trim() == "") {
		toastr.error("Task name should be filled");
	}

	//step :3.1 getting loggedin user details
	const userObj = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
	console.log("LoggedIn User Details", userObj);

	const userId = userObj.id;
	const ticketObj = {
		name: name,
		status: "Pending",
		createdDate: new Date().toJSON(),
		active: 1,
		createdBy: userId,
		Priority: "LOW",
	};
	console.log("Ticket Detials : ", ticketObj);

	const tickets = JSON.parse(localStorage.getItem("TICKETS")) ?? [];
	tickets.push(ticketObj);

	localStorage.setItem("TICKETS", JSON.stringify(tickets));

	toastr.success("Ticket Added Successfully");
}

function isAuthorised() {
	const userObj = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
	console.log("LoggedIn User Details", userObj);
	if (userObj == null) {
		//	toastr.error("User must be loggedin");
		alert(
			"User must be loggedin to access this page: Redirecting to login page"
		);
		window.location.href = "login.html";
	}
}
isAuthorised();
// 	const tasks = JSON.parse(localStorage.getItem("TASKS")) ?? [];
// 	const taskObj = {
// 		id: tasks.length + 1,
// 		newTask: newTask,
// 	};

// 	console.log(taskObj);

// 	tasks.push(taskObj);
// 	localStorage.setItem("TASKS", JSON.stringify(tasks));

// 	toastr.success("Task Added");
// 	taskAdd();
// }

// function showErrorMessage(message) {
// 	document.getElementById(
// 		"Notification"
// 	).innerHTML = `<font color = "red"> ${message}</font>`;
// }

// function showSuccessMessage(message) {
// 	document.getElementById(
// 		"Notification"
// 	).innerHTML = `<font color = "green"> ${message}</font>`;
// }
