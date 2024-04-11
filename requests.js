// requests.js

// Function to fetch requests from the server
function fetchRequests() {
    // Simulated data (replace with actual data retrieval logic)
    const requests = [
        { id: 1, clientName: "John Doe", service: "Automobile", requestDate: "2024-04-10", status: "Pending" },
        { id: 2, clientName: "Jane Smith", service: "Property", requestDate: "2024-04-09", status: "Approved" },
        // Add more requests as needed
    ];

    // Populate the table with fetched requests
    const tableBody = document.getElementById("rentalRequestsTableBody");

    requests.forEach((request, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${request.clientName}</td>
            <td>${request.service}</td>
            <td>${request.requestDate}</td>
            <td>${request.status}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Call fetchRequests when the page loads
window.onload = fetchRequests;
