//Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//Create a new route
app.get('/comments', (req, res) => {
    res.send('This is a new route');
});
//Create a new route with parameters
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.send(`This is a new route with id: ${id}`);
});
//Create a new route with query parameters
app.get('/comments/query', (req, res) => {
    const id = req.query.id;
    res.send(`This is a new route with query parameters with id: ${id}`);
});