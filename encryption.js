function main() {
    var s = readLine();
    const root = Math.ceil(Math.pow(s.length, 0.5))
    const results = new Array(root).fill("")
    for (let i = 0; i < s.length; i++) results[i % root] += s[i]
    console.log(results.join(" "))
}
