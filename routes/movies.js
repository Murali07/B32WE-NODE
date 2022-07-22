import express from "express";
import { getAllMovies, getMovieById, deleteMovieById, createMovies, updateMovieById } from "./helper.js";
const router = express.Router();



router.get("/", async function (request, response) {
    // db.movies.find({})
  
    console.log(request.query);
  
  // to convert string to number
    if(request.query.rating){
      request.query.rating = +request.query.rating;
    }
  
    // console.log(request.query);
  
    // Cursor -> Pagination | cursor -> Array | toArray()
    const movies = await getAllMovies(request);
  
    response.send(movies);
      
  })
  
  router.get("/:id", async function (request, response) {
      const {id} = request.params;
      console.log(request.params, id);
  
      //db.movies.findOne({id: "102"})
  
      // const movie = movies.find((mv) => mv.id == id); 
      
  
      const movie = await getMovieById(id)
      console.log(movie);
  
      movie ? response.send(movie) : response.send({ msg: "Movie not find" });
      
  });
  
  // Delete movie by id
  router.delete("/:id", async function (request, response) {
    const {id} = request.params;
    console.log(request.params, id);
  
    //db.movies.deleteOne({id: "102"})
  
    // const movie = movies.find((mv) => mv.id == id); 
    
  
    const result = await deleteMovieById(id)
    console.log(result);
  
    result.deletedCount > 0 ? response.send({msg: "Movie Deleted Successfully!"}) : response.send({ msg: "Movie not find" });
    
  });
  
  // middleware - express.json() -> body -> JSON
  // Create movies
  router.post("/", async function (request, response) {
    const data = request.body;
    //db.movies.insertMany(data)
  
    console.log(data);
  
    const result = await createMovies(data);
  
    console.log(result);
  
    response.send(result);
      
  });
  
  router.put("/:id", async function (request, response) {
    const {id} = request.params;
    const data = request.body;
    //db.movies.updateOne({id: id}, {$set: data})
  
    console.log(data);
  
    const result = await updateMovieById(id, data);
  
    console.log(result);
  
    response.send(result);
  
  });

  export const moviesRouter = router;


