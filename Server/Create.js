
const express=require('express')
const router=express.Router()
const User=require('./the schema')

const one=new User({
    Name:"chaker",
    Age:25,
    FavouriteFood:["ma9arouna","fanta"]
})
const two=new User({
    Name:"bahri",
    Age:33,
    FavouriteFood:["couscous","couca"]
})
const three=new User({
    Name:"saif",
    Age:26,
    FavouriteFood:["mar9a","bouga"]
})




User.create([one,two,three],err=>err? console.log(err):console.log("Created many users "))

//use find all users
User.find((err,users)=>err? console.log(err):console.log(users))

//use find by given name
User.find({Name:"saif"},(err,users)=>err? console.log(err):console.log(users))
User.findOne({Name:"saif"},(err,user)=>err? console.log(err):console.log(user))

//use find by favourite food
User.findOne({FavouriteFood:"fanta"},(err,user)=>err? console.log(err):console.log(user))


//use New updates
User.findOneAndUpdate({Name:"chaker"},{Age:20},{new:true})


//delete by remove
User.remove({Name:"bahri"},(err)=>err? console.log(err):console.log("User deleted successfully"))

//Chain search query  
User.find({FavouriteFood:"ma9arouna"}).sort({Name:1}).limit(2).select({Age:0}).exec((err,users)=>err? console.log(err):console.log(users))

module.exports=router