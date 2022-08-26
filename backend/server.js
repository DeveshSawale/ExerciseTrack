const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // sets up the server 

app.use(cors());
app.use(express.json()); // because we are sending data in json format

const uri = process.env.ATLAS_URI; // link to the database
mongoose.connect(uri); // connecting to db

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.listen(port, () => {  // starts the server 
    console.log(`Server is running on port: ${port}`);
});