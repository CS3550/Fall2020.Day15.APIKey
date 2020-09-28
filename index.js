const express = require("express");
const app = express();
let axios = require("axios")


app.use(express.static("./static"))

let apiKey = process.env.API_KEY;


app.get("/api/news/:newsTopic", (req, res)=>{
  let newsTopic = req.params.newsTopic
  let query = `https://newsapi.org/v2/everything?q=${newsTopic}&sortBy=publishedAt&apiKey=${apiKey}`;
  axios.getHi(query)
  .then(result=>{
    console.log(result.data);
    res.send(result.data);
  })
  .catch(err=>{
    res.status(500).send(err);
  });
})

app.listen(3000, (err)=>{
  if(err)return console.log(err);
  console.log("We are listening on http://localhost:3000");
})