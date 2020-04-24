if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  } 

const path = require('path');
const cors = require('cors');
const express = require('express');
const engine = require('ejs-mate');
const app = express();

//bbdd
const { mongoose } = require('./database');




//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');


//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'views')));




//routes '/api/post', 
app.use('/api/post', require('./routes/index'));



// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

