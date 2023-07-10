const express = require('express');


const app = express();

const port = 3034;


app.get('/data', (req, res) => {
  res.send('Coding activity 1.1...data comes here ');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});