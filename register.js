function register() {
	event.preventDefault();

	const name = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const password = document.querySelector("#password").value;

	console.log(
		"name = " + name + ", email = " + email + ", password " + password
	);

	//Checking here the values are correct or not

	if (name == null || name.trim() == "") {
		document.getElementById("Notification").innerHTML = "Enter the name";
	}

	if (email == null || email.trim() == "") {
		document.getElementById("Notification").innerHTML = "Enter the email";
	}

	if (password == null || password.trim() == "") {
		document.getElementById("Notification").innerHTML = "Enter the password";
	}

	if (name != null && email != null && password != null) {
		alert("Registered Successfully");
	}

	const userObj = {
		id: 1,
		name: name,
		email: email,
		password: password,
	};

	console.log(userObj);
	localStorage.setItem("User_Details", JSON.stringify(userObj));
}
