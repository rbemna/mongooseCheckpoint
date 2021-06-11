const mongoose= require ('mongoose')
const{Schema,model}= mongoose;

const personSchema = new Schema({
    name:{type:String, required:true },
    age:{type: Number },
    favoriteFood:[{type:String}]
})
module.exports=mongoose.model('person',personSchema)
