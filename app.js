const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Folk! It does not matter how slowly you go as long as you do not stop'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
