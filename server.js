const myexpress = require('express');
const mycors = require('cors');
const mypath = require('path');
const myapp = myexpress();

const View1 = require('./routers/view1');

myapp.use(mycors());
myapp.use(myexpress.json());
myapp.use('/', View1);

myapp.listen('5000', function(){  
  console.log("서버 구동 port:5000");
});

