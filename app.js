const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/about', (req, res) => {
    res.send("This is the about page .");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
});

// route paths based on string patterns
app.get('/ab?cd', (req, res, next) => {
    res.send("ab?cd");
});

// This route path will match abcd, abbcd, abbbcd
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
});

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e');
});

// Route parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
});