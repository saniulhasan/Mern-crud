const mongoose = require("mongoose")

mongoose.connect(process.env.dbURI )
.then(()=>console.log("db connection successfull"))
.catch((err)=>console.log("db error: ", err))

