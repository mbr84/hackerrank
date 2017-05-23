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
    var s = readLine();
    const root = Math.ceil(Math.pow(s.length, 0.5))
    const results = new Array(root).fill("")
    for (let i = 0; i < s.length; i++) results[i % root] += s[i]
    console.log(results.join(" "))
}
