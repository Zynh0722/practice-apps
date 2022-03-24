require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require('./routes.js')

const app = express();

app.use(express.json())
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/* Routes */

app.get('/entries', routes.get);

app.post('/entries', routes.post);

app.put('/entries/:entry', routes.put);

app.delete('/entries/:entry', routes.delete);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
