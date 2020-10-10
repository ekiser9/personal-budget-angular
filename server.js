const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(cors());


let rawdata = fs.readFileSync('budgetdata.json');
let budget = JSON.parse(rawdata);

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});