const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) 
{
res.sendFile(`${__dirname}/index.html`)
});

app.post('/submit', function(req, res) 
{  
  res.set({ 'Content-Type': 'text/html' });  
  res.write('<!DOCTYPE html><html> <head> <style type="text/css">* {font-family:new times roman; font-size: 20px;}</style></head><body>');  
  res.write('Name:' +req.body.username + '<br>Email: ' +req.body.email + '<br>Message: ' +req.body.message ); 
  res.write('</form></body></html>'); 
  console.log(req.body); 
  res.end();
});

 app.listen (8080,function()
 {
  console.log("Application started on PORT 8080");
})