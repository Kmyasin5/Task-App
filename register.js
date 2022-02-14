//temporary set values
// document.querySelector("#name").value = "";
// document.querySelector("#email").value = "";
// document.querySelector("#password").value;
// document.querySelector("#re_password").value;
//document.querySelector("#accept");

function register() {
	event.preventDefault();

	//1. get form values
	const name = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const password = document.querySelector("#password").value;
	const re_password = document.querySelector("#re_password").value;
	const tc = document.querySelector("#tc");

	console.log(
		"name = " + name + ", email = " + email + ", password " + password
	);

	//2. Validate form values

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
		toastr.error("Accept the Terms and Conditions");
		return false;
	}

	// Validation - end

	// 3. Send form details to REST API
	const createdDate = new Date().toJSON();
	const users = JSON.parse(localStorage.getItem("USERS")) ?? [];
	const userObj = {
		id: users.length + 1,
		name: name,
		email: email,
		password: password,
		re_password: re_password,
		createdDate: createdDate,
		role: "USER",
		active: 0,
	};

	console.log(userObj);

	users.push(userObj);
	localStorage.setItem("USERS", JSON.stringify(users));

	// Step 4: Show Notification - Success/Failure
	toastr.success("Successfully Registered");

	//Step 5: Redirect page
	setTimeout(function () {
		window.location.href = "login.html";
	}, 3000);
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
