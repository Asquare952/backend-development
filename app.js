// creating express server

import express from 'express';

// import bodyParser from 'body-parser';

// initalize express
const app = express();

// create a port
const PORT = 4000;

// define a route
app.get("/", (req, res) => {
  res.send("Hello Backend Development with Expressjs")
})

app.get("/about", (req, res) =>{
  res.send("<h2>This is About Page</h2>");
})

app.get("/home", (req, res) =>{
  res.send("<h2>This is Home Page</h2>");
})
app.listen(PORT, () => {
  console.log(`Server Is Running on port: ${PORT}`);
})