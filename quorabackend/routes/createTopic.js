var express = require('express')
var router=express.Router();
var kafka = require('../kafka/client')
var passport = require('passport')
var requireAuth = passport.authenticate('jwt',{session : false})


router.post('/',function(req,res){
    console.log("in update pro")
    // if(req.session.user)
    // {
        console.log("In create topic request"+req.body)
        kafka.make_request("create-topic",req,function(err,result){
            if(err)
            {
                console.log("Unable to create topic",err);
                res.writeHead(400,{
                    'Content-type' : 'text/plain'
                })
                res.end('Unable to create topic')
            }
            else{
                console.log("topics  added successfully body")
                res.writeHead(200,{
                    'Content-Type' : 'text/plain'
                })
                res.end('Adding a topic successfully')
            }
        })
   // }
})

module.exports = router