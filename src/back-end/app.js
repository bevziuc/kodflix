const express = require('express')
const app = express()
const port = 3001
const getMovies = require('./movies-details');

app.get('/rest/movies-details', (req, res) => res.send(getMovies()))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))