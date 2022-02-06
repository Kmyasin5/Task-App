function loadUsers() {
	const users = JSON.parse(localStorage.getItem("USERS")) ?? [];
	console.table(users);

	document.querySelector("#users-tbl").innerHTML = JSON.stringify(users);
}

loadUsers();
