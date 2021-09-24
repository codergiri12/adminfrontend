
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://applore:girisai1234@applore-db.4cjwn.mongodb.net/applore-db?retryWrites=true&w=majority',{
  // useCreateIndex:true,
  // useNewUrlParser:true,
  // useUnifiedTopology:true,
  // useFindAndModify:false
}).then(()=>{console.log("connection successful with database")})
.catch((err)=>{console.log("Error Got while setupping connection with database :"+err)});
