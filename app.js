const express = require("require");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/about', (req, res) => {
    res.send("This is the about page .");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})