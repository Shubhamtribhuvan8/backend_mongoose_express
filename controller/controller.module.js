const experess=require("express");
const router=experess.Router();
const MoviesData=require("../Movies/Movies.model");

router.get("/",async (req,res)=>{
    try{
        const Moviesadded= await MoviesData.find();
        return res.status(200).send(Moviesadded);
    }
    catch(error){
        res.status(500).send(error)
    }
})
router.post("/",async (req,res)=>{
    try{
        const Moviesadded= await MoviesData.create(req.body);
        return res.status(200).send(Moviesadded);
    }
    catch(error){
        res.status(500).send(error)
    }
})
router.get("/:id",async (req,res)=>{
    try{
        const Moviesadded= await MoviesData.findById(req.params.id);
        return res.status(200).send(Moviesadded);
    }
    catch(error){
        res.status(500).send(error)
    }
})
router.patch("/:id",async (req,res)=>{
    try{
        const Moviesadded= await MoviesData.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send(Moviesadded);
    }
    catch(error){
        res.status(500).send(error)
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        const Moviesadded= await MoviesData.findByIdAndDelete(req.params.id);
        return res.status(200).send(Moviesadded);
    }
    catch(error){
        res.status(500).send(error)
    }
})
router.get("/title/:title", async (req, res) => {
  try {
    const regex = new RegExp(req.params.title, "i");
    const movies = await MoviesData.find({ title: regex });
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  router.get("/", async (req, res) => {
    try {
      const query = req.query.filter || ''; // default to empty string
      const regex = new RegExp(query, "i"); // create regex pattern from query string
      const movies = await MoviesData.find({ title: { $regex: regex } }); // use regex to match any substring of the title
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  router.get("/sort/:field", async (req, res) => {
    try {
      const movies = await MoviesData.find().sort({ [req.params.field]: 1 });
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  router.get("/sort1/:field", async (req, res) => {
    try {
      const movies = await MoviesData.find().sort({ [req.params.field]: -1 });
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get("/search",async (req,res)=>{
    try {
      const movies = await MoviesData.find().find({});
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })

  router.get("/page/:pageNum", async (req, res) => {
    try {
      const perPage = 1;
      const page = parseInt(req.params.pageNum);
      const movies = await MoviesData.find()
        .skip(perPage * (page - 1))
        .limit(perPage);
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
module.exports = router;