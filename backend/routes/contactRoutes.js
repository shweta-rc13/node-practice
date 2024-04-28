const express = require('express');
const router = express.Router();

router.route('/').get((req, res) =>{
    res.status(202).json({message : "Get all contacts"});
});

router.route('/').post((req, res) =>{
    res.status(202).json({message : "Create Contact contacts"});
});

router.route('/:id').get((req, res) =>{
    res.status(202).json({message : "Get contact for " + req.params.id});
});

router.route('/:id').put((req, res) =>{
    res.status(202).json({message : ` Update contact for ${req.params.id}` });
});

router.route('/:id').delete((req, res) =>{
    res.status(202).json({message : `Delete contacts for ${req.params.id}`});
});

module.exports = router;