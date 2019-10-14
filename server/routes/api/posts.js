const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({id:1, posts:'haii'})
})

// Adding Post


// Delete Post


module.exports = router;