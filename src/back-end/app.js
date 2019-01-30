const express = require('express');
const app = express();
const getMovies = require('./movies-details');
const path = require('path');
const port = process.env.PORT || 3001;

app.get('/rest/movies-details', (req, res) => res.send(getMovies()))
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Example app is listening!`)) 