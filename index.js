const mongoose =require('mongoose')
const express=require('express')
const connectDB= require('./src/config/connectDB') 
const personModel=require ('./src/models/person')
require('dotenv').config();

const app=express();
app.use(express.json());
//connect to database
connectDB();

/**********************Create and Save a Record of a Model***********************/
// new  personModel({
//     name: "julie",
//     age:20,
//     favoriteFood:["couscous","pates"]
// })

// newPerson.save(function (err) {
//   if (err) return handleError(err);
// });

/*****************************Create Many Records with model.create()*******////
// const arrayOfPeople= [
//   {
//     name: "julie",
//     age:28,
//     favoriteFood:["soupe","salade","burritos"]
// },
// {
//   name: "mario",
//   age:20,
//   favoriteFood:["pizza","sandwitch","burritos"]
// },
// {
//   name: "marie",
//   age:26,
//   favoriteFood:["pasta","spaggetti","burritos"]
// }
// ]
// personModel.create(arrayOfPeople,function (err) {
//   if (err) return handleError(err);
// });

/*************************Use model.find() to Search Your Database**************/
//personModel.find({
//   name: 'julie'   // search query
// },(err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

/**************Use model.findOne() to Return a Single Matching Document from Your Database************************/

//personModel.findOne({favoriteFood:{$in:['pizza']}},(err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

/************************Use model.findById() to Search Your Database By _id************************/

//personModel.findById({_id:'60c38f71bf66fb417417fe48'},(err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });


/************************Classic Updates by Running Find, Edit, then Save************************/

//personModel.findById({_id:'60c38f71bf66fb417417fe48'},(err, data) => {
//   if (err) console.log(err);
//   else {
//     data.favoriteFood.push("hamburger");
//     data.save();
//     console.log(data);
//   }})


/************************New Updates on a Document Using model.findOneAndUpdate()************************/
//
  // personModel.findOneAndUpdate(  {
  //   name: 'emna'  // search query
  // }, 
  // {
  //   age:20   // field:values to update
  // },{new:true},(err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });
  
/************************************************/

  //Delete One Document Using model.findByIdAndRemove
  // personModel.findByIdAndRemove({_id:'60c38f71bf66fb417417fe48'}, (err, data) => {
  //     if (err) console.log(err);
  //     else {
      
  //       console.log("person removed");
  //     }})

/************************************************/
  //Delete Many Documents with model.remove()

      //personModel.remove({name:"julie"},(err,data)=>{
      //   if (err) console.log(err);
      // else {
      //   console.log("all person named julie are removed");
      // }

      // })
/*************************Chain Search Query Helpers to Narrow Search Results***********************/


  // personModel.find({favoriteFood:{$in:["burritos"]}}).sort({ name: "asc" })
  // .limit(2)
  // .select("-age")
  // .then(doc => {
  //   console.log(doc)
  // })
  // .catch(err => {
  //   console.error(err)
  // })