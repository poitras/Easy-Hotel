require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk'); //gonna look first for a talk file then a folder with a index.js file
var question = require('./talk/question');

talk.intro();
talk.hello("Nicolas");

var answer = question.ask("Wath is the meaning of life?");
console.log(answer);

goodbye();
