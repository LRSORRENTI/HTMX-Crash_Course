import express from "express";

const app = express();

//static folder set: 
app.use(express.static('public'));

//parse URL encoded bodies (via HTML FORMS)

app.use(express.urlencoded({ extended: true }));

// parse JSON data bodies: 

app.use(express.json());

// run server: 

app.listen(3000, () => {
    console.log("node express server listening on port 3000")
})
