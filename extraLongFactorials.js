function main() {
    var n = parseInt(readLine());
    const BigNumber = require('bignumber.js')
    let factorial = new BigNumber(1)
    for (let i = 2; i <= n; i++) {
        factorial = factorial.mul(i)
    }
    console.log(factorial.toFixed())
}
