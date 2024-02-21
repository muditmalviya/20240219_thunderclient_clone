
    document.getElementById('sendButton').addEventListener('click', function() {
        // Get the selected request type and API URL from the form
        const requestType = document.getElementById('type-req').value;
        const apiUrl = 'http://localhost:3002/search?name=' + encodeURIComponent(document.querySelector('.input-field').value);

        // Use the fetch API to make a request to the backend
        fetch(apiUrl, {
            method: requestType, // Use the selected request type (GET, POST, etc.)
        })
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Use the fetched data
            // console.log(data);
            document.getElementById('main-body-last-right').innerHTML=JSON.stringify(data);
            // You can manipulate the data or update the UI here
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('There was a problem with the fetch operation:', error);
        });
    });
