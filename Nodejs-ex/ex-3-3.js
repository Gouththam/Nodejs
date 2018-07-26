
var fs = require('fs');
fs.appendFile('ukinode.txt','It is a full scholarship program for Coding', function(err){
  if(err)throw err;
  console.log('Saved!');
});
