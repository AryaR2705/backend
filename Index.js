const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
require('./conn');
app.use(cors());
app.use(require('./auth'));

const PORT = process.env.PORT || 3001;

app.get('/login1', (req, res) => {
    res.send('login page');
});

app.get('/register', (req, res) => {
    res.send('register page');
});

app.get('/home', (req, res) => {
    res.send('homepage');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
