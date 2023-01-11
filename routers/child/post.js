const myexpress = require('express');
const router = myexpress.Router();

router.post('/', function (req, res) {
  res.send("성공여부 DB 저장")
});

module.exports = router;