const myexpress = require('express');
const router = myexpress.Router();
const probsDB = require('../../json/probsDB.json');

// localhost:5000/viewget
// localhost:5000/viewget/about
// localhost:5000/viewget/probsDB

router.get('/', function (req, res) {
  res.send("나는 노드 서버의 첫 번째 view입니다...람쥐")
});

router.get('/about', function (req, res) {
  res.send({
    title : "리액트소개페이지의 타이틀로 보내져서 나옵니다. api 연동",
    num : 10
  })
});

router.get('/probsDB', function (req, res) {
  res.send(probsDB);
});

module.exports = router;