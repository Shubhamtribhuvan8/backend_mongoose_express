const mongoose=require("mongoose");

const MoviesSchema=new mongoose.Schema({
        title: {
          type: String
        },
        year: {
          type: Number
        },
        rating: {
          type: Number
        },
        image: {
          type: String
        },
      },
      { timestamps: true }
)

const MoviesData= mongoose.model("MovieApp",MoviesSchema);
module.exports=MoviesData;