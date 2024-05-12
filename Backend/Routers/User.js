const express = require('express');
const router = express.Router();
const Model = require('../Models/User');

router.post('/add', (req,res) => {
    console.log(req.body);
    // Storing data to mongoDB
    new Model(req.body).save()
    .then(result => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.get("/getbymail/:email", (req,res) => {
    console.log(req.params.email);
    Model.findOne({ email:req.params.email })
    .then ((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.put('/update/:id' , (req,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) =>{
        console.log(err);
        res.status(500).json(err);
    });
})

router.get("/getuser/:id", (req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/authenticate', (req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json (result);
        else res.status(400).json ({message: 'login failed'});
    }).catch((err) => {
        console.log(err);
        res.status(500).json (err)
    });
})

router.get('/getall',(req,res) => {
    Model.find({})
    .then((result)=> {
        res.json(result); 
    }).catch((err)=>{
        console.log(err);
        res.status(500).json (err)
    });
})

router.delete("/delete/:id", (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err);
    });

});

module.exports = router;