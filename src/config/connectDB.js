const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
    await mongoose.connect('mongodb+srv://emna123456:emna123456@cluster0.67iwg.mongodb.net/Person?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("database connected");
} catch (err) {
    console.log({ msg: "cannot connect to database ", err });
}
};
module.exports = connectDB;

