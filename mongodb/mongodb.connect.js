const mongoose = require("mongoose")
async function connect(){
    try{
        await mongoose.connect(
            "mongodb+srv://senhamlab:senhamlab@cluster0.a6g1s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    }catch(err){
            console.error("Error connecting to mongodb")
            console.error(err)
    }
}