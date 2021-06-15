const express = require('express');

const app = express();
app.use(express.json()); 

require('./routes/product.routes')(app);


app.listen(5050, () => console.log('Example app listening on port 5050!'));