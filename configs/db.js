const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
mongoose.set('strictQuery', false);
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const connection=async ()=>{
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.dkffjqp.mongodb.net/MoviesApp?appName=mongosh+1.7.1`)
  console.log("connection Established!")
}
module.exports=connection;
