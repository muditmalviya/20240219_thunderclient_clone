const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3002;
// Enable CORS for all requests
app.use(cors());

// Define your API endpoint
app.get('/search', (req, res) => {
    // Your backend logic here
    // This is just an example response
    res.json({ message: 'This is a sample response from the backend.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
