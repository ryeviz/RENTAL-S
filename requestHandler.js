function saveRequest(event) {
    event.preventDefault(); 


    const clientName = document.getElementById('clientName').value;
    const service = document.getElementById('service').value;
    const requestDetails = document.getElementById('requestDetails').value;

    const url = `view_requests.html?clientName=${encodeURIComponent(clientName)}&service=${encodeURIComponent(service)}&requestDetails=${encodeURIComponent(requestDetails)}`;

    window.location.href = url;
}
