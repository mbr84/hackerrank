function processData(input) {
    const inputArray = input.split("\n").slice(1)
    inputArray.forEach(word => {
        if (word.length === 1) {
            console.log("no answer")
        } else {
            const wordArray = word.split("")
            for(let i = wordArray.length - 1; i > 0; i--) {
                if (wordArray[i] > wordArray[i - 1]) {
                    let newSequenceLetters = wordArray.slice(i - 1).sort()
                    var startLetterIdx = newSequenceLetters.indexOf(wordArray[i-1]) + 1
                    for (let j = startLetterIdx; j < newSequenceLetters.length; j++) {
                        if (newSequenceLetters[j] !== wordArray[i - 1]) {
                            startLetterIdx = j;
                            break
                        }
                    }
                    const startLetter = newSequenceLetters.splice(startLetterIdx, 1)
                    const newLetters = wordArray.slice(0, i - 1).concat(startLetter, newSequenceLetters)
                    console.log(newLetters.join(""))
                    break
                } else if (i === 1 || word.length === 1) console.log("no answer")
            }
        }
    })


}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
