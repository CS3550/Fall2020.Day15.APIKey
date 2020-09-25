const express = require("express");
const app = express();
let axios = require("axios")


app.use(express.static("./static"))

let apiKey = process.env.API_KEY;


app.get("/api/news/:newsTopic", (req, res)=>{
  let newsTopic = req.params.newsTopic
  let query = `http://newsapi.org/v2/everything?q=${newsTopic}&from=2020-08-25&sortBy=publishedAt&apiKey=${apiKey}`;
  console.log(query);
  axios.get(query)
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