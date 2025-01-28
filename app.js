// creating express server

import express from 'express';
import bobyParser from 'body-parser'
import { v4 as uuidv4 } from "uuid"; 
// import bodyParser from 'body-parser';

// initalize express
const app = express();

// parse request
app.use(bobyParser.json());
const uuid = uuidv4();

// create a port
const PORT = 4000;

// define a route
app.get("/", (req, res) => {
  res.send("Hello Backend Development with Expressjs")
})

// users array
const users = [
  {
    id: 1,
    name: "Abdul Afeez",
    email: "olamilekan2000@gmail.com",
  },
  {
    id: 2,
    name: "Abdul Alim",
    email: "abdulalim2009@gmail.com",
  },
  {
    id: 3,
    name: "Abdul Aliyah",
    email: "aliya2008@gmail.com",
  },
]

const posts = [
  {
    id: 1,
    title: "Post 1",
    description: "This is post 1",
    dateOfCreation: "1/23/2025",
  },
  {
    id: 2,
    title: "Post 2",
    description: "This is post 2",
    dateOfCreation: "1/23/2025",
  },
  {
    id: 3,
    title: "Post 3",
    description: "This is post 3",
    dateOfCreation: "1/23/2025",
  },
];

// users route
app.get("/users", (req, res) =>{
  res.send({users, message: "Users data fetched successfully"})
})

app.get("/posts", (req, res) => {
  res.json({posts, message: "Posts data fetched successfully", status: "Success"})
});

//
app.post("/users", (req, res) => {
  const user = req.body;
  users.push({id: uuid, ...user});
  res.json({
    message: "User added successfully",
    status: "success"
  });
});

//
app.post("/posts", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.json({
    message: "Post added successfully",
    status: "success"
  });
});

// get a single user
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);
  res.json({
    findUser,
    message: `User with id: ${id} successfully fetched`,
    status: "Successfull",
  });
});

// delete user endpoint by id
app.delete("users/:id", (req, res) => {
  const { id } = req.params;
  const deleteUser = users.filter((user) => user.id !== id);
  res.json({
    deleteUser,
    message: `User with id: ${id} is successfully deleted`,
  });
});

// update user endpoint by id
app.patch("users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const findUser = users.find((user) => user.id === id);
    if (name) {
      findUser.name = name;
    }
    if (email) {
      findUser.email = email;
    }
    res.json({
      message: `User with id: ${id} is successfully updated`,
      status: "Success",
    });
  } catch (error) {
    console.log("User not found", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server Is Running on port: ${PORT}`);
})