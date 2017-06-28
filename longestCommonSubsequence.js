function commonChild(str1, str2){
    const table = new Array([],[])
    for (let i = 0; i < 2; i++) {
        table[i][0] = 0
    }
    for (let i = 0; i <= str2.length; i++) {
        table[0][i] = 0
    }
    for (let i = 1; i <= str1.length; i++) {
      table[1] = [0]
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                table[1][j] = table[0][j-1] + 1

            } else {
                table[1][j] = Math.max(table[1][j - 1], table[0][j])
            }
        }
        table[0] = table[1]
    }
    return table[1][str2.length]

}
