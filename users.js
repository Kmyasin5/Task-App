function loadUsers() {
	let content = "";
	let i = 0;
	const users = JSON.parse(localStorage.getItem("USERS")) ?? [];
	console.table(users);

	for (const userObj of users) {
		content += `
                <tr>
                    <td> ${i + 1} </td>
                    <td> ${userObj.name} </td>
                    <td> ${userObj.email} </td>
   <td> ${userObj.createdDate} </td>
      <td> ${userObj.role} </td>
	     <td>`;

		if (userObj.active) {
			content += `
			<button
			type="button"
			class="btn btn-success btn-sm"
			onclick="updateStatus(${i}, ${userObj.active})"> ACTIVE </button>`;
		} else {
			content += `
			<button
			type="button"
			class="btn btn-danger btn-sm"
			onclick="updateStatus(${i}, ${userObj.active})"> INACTIVE </button>`;
		}

		content += `
		<button
			type="button"
			class="btn btn-danger btn-sm"
			onclick="deleteUser(${i})"> DELETE </button>`;

		content += `</td >
                </tr>
                `;
		i++;
	}

	document.querySelector("#users-table").innerHTML = content;
}

function updateStatus(index, active) {
	const users = JSON.parse(localStorage.getItem("USERS")) ?? [];
	console.table(users);

	if (active) {
		let cfm = confirm("Do you want to deactivate user ?");
		if (cfm) {
			users[index].active = !active;
			localStorage.setItem("USERS", JSON.stringify(users));
			toastr.success("Successfully Inactivated");
		}
	} else {
		let cfm = confirm("Do you want to activate user ?");
		if (cfm) {
			users[index].active = !active;
			localStorage.setItem("USERS", JSON.stringify(users));
			toastr.success("Successfully Activated");
		}
	}
	loadUsers();
}

function deleteUser(index) {
	const users = JSON.parse(localStorage.getItem("USERS")) ?? [];
	console.table(users);

	let cfm = confirm("Do you want to delete user ?");
	if (cfm) {
		users.splice(index, 1);
		localStorage.setItem("USERS", JSON.stringify(users));
		toastr.success("Successfully Deleted");
	}

	//refresh
	loadUsers();
}

loadUsers();
