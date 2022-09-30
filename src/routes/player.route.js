const express = require("express");
const router = express.Router();
const player = require("../services/player.service");



router.get("/", async function (req, res) {
    try {
        res.json(await player.find());
    } catch (err) {
        console.error(` `, err.message);
    }
});

router.get('/:id', async (req, res) => {
    try{
        id =  req.params.id;
        res.json(await player.findById(id))
    }
    catch (err) {
        console.error(` `, err.message);
    }

router.post('/create' , async (req, res) => {
    try{
        data = req.body.data;
        res.json(await player.create(data))        
    }catch(err){
        console.error(` `, err.message);
    }
})

router.put('/update/:id' , async (req,res) => {
    try{
        id = req.params.id;
        res.json(await player.update(id))
    }catch (err){
        console.error(` `, err.message);
    }


})

  
 

});

module.exports = {
    router,
  };