const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config=require('./config');
const port =process.env.PORT|| config.port ;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

const crossOriginURL = "*";
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , crossOriginURL);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

mongoose.connect(config.database, { useNewUrlParser: true,useUnifiedTopology: true });

const reviewSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
  });
  const Review = mongoose.model('Review', reviewSchema);
  

app.post('/addreview', (req, res) => {
  let newreview = {
    title: req.body.title,
    rating: req.body.rating,
    des: req.body.des,
  };
  let review1= new Review(newreview)
  review1.save()
  res.json({
    success:true,
  })
});


app.get('/addreview', (req, res, next) => {
    console.log('hitted');
    Review.find((err, review) => {
        res.json({
            success:true,
            data:review
        })
    });
});

app.listen(port,(data,err)=>{
    console.log('Connected!')
});