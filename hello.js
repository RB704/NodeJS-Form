// const url = require('url');

// var webAddr = 'http://www.localhost.com/demo/?action=getData&id=123'
// var urlData=url.parse(webAddr);
// console.log(urlData); 
// console.log(urlData.protocol);
// console.log(urlData.host);

const express=require('express')
//const bodyParser=require('body-parser')
const app = express()
const port = 3000

app.set('view engine' , 'pug')
//app.use(bodyParser.urlencoded({extended : false}))
//app.set('views', __dirname + '/views');
//                                                                                                                                                                                                                                                                                                                                                                                                                                                      app.set('view engine' , 'pug')
// app.get('/', function(req , res) { 
//     res.sendFile('index.html' , {root : __dirname})
// });

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey Express', message: 'Hello there Jaswinder!',jaswinder:' singh chawla',rbisht:'rishabh' })
  })

app.listen(port , () => console.log(`Example app listning on port ${port}!`))