//temporary set values
// document.querySelector("#name").value = "";
// document.querySelector("#email").value = "";
// document.querySelector("#password").value;
// document.querySelector("#re_password").value;

//document.querySelector("#accept");

function register() {
	event.preventDefault();

	const name = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const password = document.querySelector("#password").value;
	const re_password = document.querySelector("#re_password").value;
	const accept = document.querySelector("#tc");

	console.log(
		"name = " + name + ", email = " + email + ", password " + password
	);

	//Checking here the values are correct or not

	if (name == null || name.trim() == "") {
		//document.getElementById("Notification").innerHTML = "Enter the valid name";
		showErrorMessage("Enter the valid name");
		return false;
	} else if (name.length <= 2) {
	}

	if (email == null || email.trim() == "") {
		// document.getElementById("Notification").innerHTML = "Enter the valid email";
		showErrorMessage("Enter the valid email");
		return false;
	}

	if (password == null || password.trim() == "") {
		// document.getElementById("Notification").innerHTML =
		// 	"Enter the valid password";
		showErrorMessage("Enter the valid Password");
		return false;
	}

	if (re_password == null || re_password.trim() == "") {
		// document.getElementById("Notification").innerHTML =
		// 	"Enter the valid password";
		showErrorMessage("Enter the valid Password");
		return false;
	}

	if (password != re_password) {
		showErrorMessage("Password doesn't match");
		return false;
	}

	if (!tc.checked) {
		showErrorMessage("Accept the checkBox");
		return false;
	}

	if (name != "" && email != "" && password == re_password && tc.checked) {
		// document.getElementById("Registered").innerHTML = "Registration Success";
		showSuccessMessage("Registration Success");
		toastr.success("Successfully Registered");
	}

	const users = JSON.parse(localStorage.getItem("USERS")) ?? [];
	const userObj = {
		id: users.length + 1,
		name: name,
		email: email,
		password: password,
		re_password: re_password,
	};

	console.log(userObj);

	users.push(userObj);
	localStorage.setItem("USERS", JSON.stringify(users));
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
