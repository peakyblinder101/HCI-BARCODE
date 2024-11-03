// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2'); // Use mysql2

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER || 'imong username db',
    password: process.env.DB_PASSWORD || 'imong password sa db',
    database: process.env.DB_NAME || 'db name',
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url} with body:`, req.body);
    next();
});

// Sign Up Endpoint
app.post('/api/signup', (req, res) => {
    const { username, firstName, lastName, gender, email, password, allergies } = req.body;
    console.log('Signup request data:', req.body); // Log the signup data

    if (!username || !firstName || !lastName || !gender || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if user already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Database query error:', err); // Log error
            return res.status(500).json({ message: 'Database query error.' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 8);

        // Save user to database
        const query = 'INSERT INTO users (username, firstName, lastName, gender, email, password, allergies) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [username, firstName, lastName, gender, email, hashedPassword, allergies], (err) => {
            if (err) {
                console.error('Error inserting data:', err); // Log error
                return res.status(500).json({ message: 'Error signing up.' });
            }
            res.status(201).json({ message: 'User signed up successfully!' });
        });
    });
});

// Log In Endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login request data:', req.body); // Log the login data

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err || results.length === 0) {
            console.error('Invalid email or password error:', err); // Log error
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const user = results[0];

        // Check password
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            console.error('Invalid password for email:', email); // Log invalid password attempt
            return res.status(401).json({ token: null, message: 'Invalid password.' });
        }

        // Create a token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: 86400 }); // expires in 24 hours
        res.status(200).json({ token, message: 'Logged in successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
