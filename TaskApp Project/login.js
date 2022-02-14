// Here, we creating the login page

function login() {
	event.preventDefault();

	const logName = document.querySelector("#logName").value;
	const logPassword = document.querySelector("#logPassword").value;

	if (logName == null || logName.trim() == "") {
		showErrorMessage("Enter the valid name");
		return false;
	}

	if (logPassword == null || logPassword.trim() == "") {
		alert("Fali");
		showErrorMessage("Enter the valid Password");
		return false;
	}

	// search user details from the list of users and store the searched result in localStorage
	const users = JSON.parse(localStorage.getItem("USERS")) ?? [];
	let searchUser = null;
	for (let userObj of users) {
		if (userObj.email == logName && userObj.password == logPassword) {
			searchUser = userObj; // matched user details -> store it in a variable
			break;
		}
	}
	if (searchUser == null) {
		toastr.error("Invalid login credentials");
	} else {
		console.log(searchUser);
		localStorage.setItem("LOGGED_IN_USER", JSON.stringify(searchUser));
		toastr.success("Loggedin Successfull");
		setTimeout(function () {
			window.location.href = "index.html";
		}, 3000);
	}
}

function showErrorMessage(message) {
	document.getElementById(
		"Notification"
	).innerHTML = `<font color = 'red'>${message}</font>`;
}

function showSuccessMessage(message) {
	document.getElementById(
		"Notification"
	).innerHTML = `<font color = 'green'>${message}</font>`;
}
