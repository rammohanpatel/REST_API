const express = require("express");
const router = new express.Router();
const Race = require("../models/Race_Schema");
// require('../db/connection');

router.post("/mens", async (req, res) => {
    try {
        const addingNewRecords = new Race(req.body)
        console.log(req.body);
        const insertNew = await addingNewRecords.save();
        res.status(201).send(insertNew);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get("/mens", async (req, res) => {
    try {

        const getMens = await Race.find({}).sort({ "ranking": 1 });
        res.status(201).send(getMens);
    } catch (err) {
        res.status(400).send(err);
    }
})

//handling get request of individual 
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await Race.findById(_id);
        res.send(getMen);
    } catch (err) {
        res.status(400).send(err);
    }
})

//Handling patch req of individual
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await Race.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(getMen);
    } catch (err) {
        res.status(500).send(err); //Bc now error will come from server side
    }
})

//Deleting the data 
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await Race.findByIdAndDelete(_id);
        res.send(getMen);
    } catch (err) {
        res.status(500).send(err); //Bc now error will come from server side
    }
})

module.exports = router;