const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS (Cross-Origin Resource Sharing)
// Enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Allow requests from your React app
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
let users = [];

// Route to handle user registration (signup)
app.post('/users', (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Logging for debugging
    console.log('Received data:', { name, email, password });

    // Check if any of the fields are empty
    if (!name || !email || !password) {
      console.log('Empty field detected');
      res.status(400).json({ message: 'All fields must be filled' });
      return;
    }
    // if (!userData.name || !userData.email || !userData.password) {
    //   alert('All fields must be filled');
    //   return;
    // }
    // Read existing user data from db.json using the absolute path
    users = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

    // Check if the email already exists
    const existingUser = users.find((user) => user.email === req.body.email);
    if (existingUser) {
      res.status(409).json({ message: 'Email ID already exists, try logging in' });
      return;
    }
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

// Route to handle user login with a GET request
app.get('/users', (req, res) => {
  try {
    const { email, password } = req.query;
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      res.status(200).json({ message: 'User logged in successfully', user: foundUser });
    } else {
      res.status(401).json({ message: 'User login failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
