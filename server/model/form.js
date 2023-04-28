const mongoose = require("mongoose")
const validator = require("validator")

const formSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"firstname is required"],
        minlength:[3,"min 3 letter"]
    },
    lastname:{
        type:String,
        required:[true,"lastname is required"],
        minlength:[3,"min 3 letter"]
    },
    phone: {
		type: String,
		required: [true, "User phone number required"],
		
	},
    address: {
		type: String,
		required: [true, "Location can't be blank"],
	},
    
    photo:{
        data:Buffer,
        contentType:String,
    },
})

module.exports = (mongoose.model("User",formSchema))