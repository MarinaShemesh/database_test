const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

const nameSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    phone:Number
});

const User = mongoose.model("User", nameSchema);

app.use(express.static(__dirname + '/public')); 
// sets the static files location to public
app.use(express.static(__dirname + '/node_modules'));

app.post("/addname", (req, res) => {
    const myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});



app.listen(port, () => console.log(`Server listening on port 3000`))