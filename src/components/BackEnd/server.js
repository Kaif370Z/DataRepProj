const express = require('express')
const app = express()
const port = 3420
var bodyParser = require('body-parser')

//allows users to access data
const cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());
//allows us to access data
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://Kaif:Tahir@data-rep.mqbehvq.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const bikeSchema = new mongoose.Schema({
  make:String,
  model:String,
  year:String,
  photo:String
});

const bikeModel = mongoose.model('my Bikes', bikeSchema);

app.post('/api/bikes', (req, res)=>{
    console.log(req.body);

    bikeModel.create({
      make:req.body.make,
      model:req.body.model,
      year:req.body.year,
      photo:req.body.photo
    })

    res.send('Data Recieved');
})

app.get('/api/bikes', (req, res)=>{
  bikeModel.find((error,data) =>{
    res.json(data);
  })
  
})

app.get('/api/bikes/:id', (req, res)=>{
  console.log(req.params.id);

//find a bike
bikeModel.findById(req.params.id,(error, data)=>{
  res.json(data);
})
})
//update a bike
app.put('/api/bikes/:id', (req,res)=>{
  console.log('Update: '+req.params.id)
  bikeModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error, data)=>{
      res.send(data);
    })
})
//delete a bike
app.delete('/api/bikes/:id', (req,res)=>{
  console.log("Deleting: "+req.params.id);
  bikeModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})

// get the server up and running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})