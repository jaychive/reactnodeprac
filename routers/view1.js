const myexpress = require('express');
const router = myexpress.Router();

const viewget = require('./child/get');
const viewpost = require('./child/post');

// localhost:5000/viewget
// localhost:5000/viewpost

router.use('/viewget', viewget);
router.use('/viewpost', viewpost);


module.exports = router;

