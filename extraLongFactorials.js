process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    const BigNumber = require('bignumber.js')
    let factorial = new BigNumber(1)
    for (let i = 2; i <= n; i++) {
        factorial = factorial.mul(i)
    }
    console.log(factorial.toFixed())
}
