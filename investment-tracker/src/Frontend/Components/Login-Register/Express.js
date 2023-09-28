const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Create an absolute path to the db.json file
const dbFilePath = path.join(__dirname, 'db.json');

// Route to handle user registration (signup)
app.post('/users', (req, res) => {
  try {
    // Read existing user data from db.json using the absolute path
    const users = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

    // Add the new user to the array
    users.push(req.body);

    // Write the updated user data back to db.json
    fs.writeFileSync(dbFilePath, JSON.stringify(users, null, 2));

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
