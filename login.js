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

	if (logName != "" && logPassword != "") {
		showSuccessMessage("Login Successfully");
		toastr.success("Successfully Logged in");
	} else {
		showErrorMessage("Login Failed");
		toastr.failure("Login failed");
	}

	const userLogObj = {
		id: 1,
		logName: logName,
		logPassword: logPassword,
	};

	console.log(userLogObj);
	localStorage.setItem("User_Details", JSON.stringify(userLogObj));

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
}
