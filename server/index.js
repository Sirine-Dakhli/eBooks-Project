const express = require("express");
var db = require('../database-mongo');

const app = express();
const port =  3000

app.use(express.static(__dirname + "/../react-client/dist"))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/build"));

app.get("/books",function (req,res){
  db.selectAll(function (err,data){
    if(err){
      res.sendStatus(500)
    }else{
      res.json(data)
    }
  })
})

app.post('/addbook',function(req,res){
  db.create(req.body,(err,data)=>{
    res.send(data)
  })
})

app.delete('/deletebook/:id', (req,res)=>{
  db.deleted(req.params.id,(err,data)=>{
    res.send(data)
  })
})

app.put('/updated/:id', (req,res)=>{
  db.update(req.params.id, req.body, (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({message:'updated'})

    }
    
  })
})

app.listen(port, ()=> {
  console.log(`listening on port http://localhost:${port}`);
});
