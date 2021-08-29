/*------------------EXPRESS DEFINE HOST AND PORT--------------------*/
const express = require('express'),
  app = express('localhost'),
  port = process.env.PORT || 5000;

/*--------------------------------------Declare global variables--------------------------------*/
  
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   mongoose = require('mongoose')
   app.use(cors())
   /*---------------------MOONGOSE------------------------*/
    mongoose.Promise = global.Promise;
    mongoose.connect(
    'mongodb://localhost:27017/InsideiiM', 

    
    {
        useNewUrlParser: true
    }
    );

    const db = mongoose.connection;

    db.on(
    'error', 
    console.error.bind(
        console, 'MongoDB connection error:'
    )
    );  

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({
      extended: false
   }));




   
  var indexRouter = require('./routes/index');

  app.use('/', indexRouter);
// var userRoute = require('./routes/index');
// userRoute(app);

/*-----------------------listen port----------------------------*/
app.listen(port);
console.log('node RESTful API server started on: ' + port)