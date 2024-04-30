const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const mongoose = require('mongoose');
const users =require("./routes/users")
const user =require("./routes/user")

const dotenv= require('dotenv') 
const logadmin =require("./routes/admin")
dotenv.config();



mongoose
.connect(process.env.MONGO_URI)
.then(()=>{ console.log("connected to mongodb");})
.catch((error)=>{
console.log("the error is ",error); 
})

app.use(cors());

app.use(express.json());
app.use("/api",users);
app.use("/api/admin",logadmin);



app.listen(port, () => {
    console.log("listening on port " + port);
});
