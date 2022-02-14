function loadTickets() {
	let content = "";
	let i = 0;

	//1. Get all tickets
	const tickets = JSON.parse(localStorage.getItem("TICKETS")) ?? [];
	console.table(tickets);

	//2. Iterate tickets and store the table body  contents
	for (const ticketObj of tickets) {
		content += `
                <tr>
                    <td> ${i + 1} </td>
                    <td> ${ticketObj.name} </td>
                    <td> ${ticketObj.Priority} </td>
                    <td> ${ticketObj.createdDate} </td>
					<td> ${ticketObj.createdBy} </td>
                    <td> ${ticketObj.status} </td>
	     <td>`;

		if (ticketObj.active) {
			content += `
			<button
			type="button"
			class="btn btn-success btn-sm"
			onclick="updateStatus(${i}, ${ticketObj.active})"> CLOSE </button>`;
		} else {
			content += `
			<button
			type="button"
			class="btn btn-danger btn-sm"
			onclick="updateStatus(${i}, ${ticketObj.active})"> REOPEN </button>`;
		}

		content += "</td>";
		content += `<td>
		<button
			type="button"
			class="btn btn-danger btn-sm"
			onclick="deleteTicket(${i})"> DELETE </button>
</td>`;
		//have doubts on the below one(content)

		content += `
                </tr>
                `;
		i++;
	}

	//Append the tbody content to the table
	document.querySelector("#tickets-table").innerHTML = content;
}

function updateStatus(index, active) {
	const tickets = JSON.parse(localStorage.getItem("TICKETS")) ?? [];
	console.table(tickets);

	if (active) {
		let cfm = confirm("Do you want to deactivate the Ticket ?");
		if (cfm) {
			tickets[index].active = !active;
			localStorage.setItem("TICKETS", JSON.stringify(tickets));
			toastr.success("Successfully Inactivated");
		}
	} else {
		let cfm = confirm("Do you want to activate the Ticket	 ?");
		if (cfm) {
			tickets[index].active = !active;
			localStorage.setItem("TICKETS", JSON.stringify(tickets));
			toastr.success("Successfully Activated");
		}
	}
	loadTickets();
}

function deleteTicket(index) {
	const tickets = JSON.parse(localStorage.getItem("TICKETS")) ?? [];
	console.table(tickets);

	let cfm = confirm("Do you want to delete the Ticket ?");
	if (cfm) {
		tickets.splice(index, 1);
		localStorage.setItem("TICKETS", JSON.stringify(tickets));
		toastr.success("Successfully Deleted");
	}

	//refresh
	loadTickets();
}

//1. Get all tickets and display tickets
loadTickets();

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
