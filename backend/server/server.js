import express from "express";
import fetchUsers from "../routes/fetchUsers.js";

const app = express();

// routes:

//static folder set: 
app.use(express.static('public'));

//parse URL encoded bodies (via HTML FORMS)

app.use(express.urlencoded({ extended: true }));

// parse JSON data bodies: 

app.use(express.json());

app.use('/api', fetchUsers)

// run server: 

app.listen(3000, () => {
    console.log("node express server listening on port 3000")
})
