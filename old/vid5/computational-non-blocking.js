var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    stdio : 'inherit' //to make sure its using the good console
});

console.log(2);