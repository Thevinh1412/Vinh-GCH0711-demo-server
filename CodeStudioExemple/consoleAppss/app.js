var myModule = require('./myModule.js');
var myMath = require('./math.js');
var myFileModule = require('./fileModule.js');

myModule.myPrint('hi hey hi');
myModule.myPrint2('hi hey hi');

//myFileModule.taoFile('hello.txt','xin chao nhe2!!!!');
myFileModule.appendFile('hello.txt','aaaddd hungry!!!1')
myFileModule.docFile('hello.txt');

let k = myMath.hamMu(2,4);
console.log(k);
console.log(myMath.hamSqrt(16));

for(i=1;i<=5;i++)
{
   sayHi("Hello Visual Studio code "+ 2*i); 
}

function sayHi(msg){
    console.log(msg);
}