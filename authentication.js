function isAuthorised() {
	const userObj = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
	console.log("LoggedIn User Details", userObj);
	if (userObj == null) {
		//	toastr.error("User must be loggedin");
		alert("User must be loggedin");
		window.location.href = "login.html";
	}
}
isAuthorised();
