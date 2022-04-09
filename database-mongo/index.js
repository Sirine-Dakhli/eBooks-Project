var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test")

var db = mongoose.connection

db.on("error", function(){
  console.log("mongoose connection error")
})

db.once("open", function(){
  console.log("mongoose connected successfully")
})

var bookSchema =  mongoose.Schema({
  title:String,
  imageUrl:String,
  genre:String,
 
  bookLink:String
 });
 



 var Book = mongoose.model("Book", bookSchema);

 
var selectAll= function (callback){
  Book.find({},function(err,book){
      if(err){
          callback(err,null)
      }else{
          callback(null,book)
      }
  })
}

var create = function (data,callback) {
  Book.create(data,function(err,book){
      if(err){
          callback(err,null)
      }else{
          callback(null,book)
      }
  })

}

var deleted = function (id,callback){
  Book.deleteOne({_id:id},function(err,book){
      if(err){
          callback(err,null)
      }else{
          callback(null,book)
      }
  })
}

var update = function (id, obj, callback){
  Book.updateOne({_id:id},obj,function(err,book){
      if(err){
          callback(err,null)
      }else{
          callback(null,book)
      }
  })
}



module.exports.selectAll =selectAll
module.exports.create =create
module.exports.deleted =deleted
module.exports.update =update
