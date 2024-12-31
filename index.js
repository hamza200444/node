// Import the express module
const express = require('express');
const app = express();

// Set the port number
const port = 3000;

// Serve static files (e.g., HTML, CSS, JS) from the "public" folder
app.use(express.static('public'));

// Define a route to render the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
