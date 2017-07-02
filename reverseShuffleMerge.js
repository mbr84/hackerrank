const getLetterRanks = string =>
  string.split("")
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort()
const getLetterCounts = (string) => {
  return string.split("").reduce((acc, curr) => {
    acc[curr] ? acc[curr] += .5 : acc[curr] = .5
    return acc
  }, {})
}
const minimalString = (string) => {
  const letterCounts = getLetterCounts(string)
  const letterRanks = getLetterRanks(string)
  const seen = {}
  let result = ""
  let bestSeen = { char: "|", idx: string.length + 1 } // "z" < "|" => true

  const funcs = [char => seen[char].used++, char => result += char, () => bestSeen.char = "|"]
  const updateVars = char => funcs.forEach(fn => fn(char))

  for (let i = string.length - 1; i >= 0 && result.length < string.length / 2; i--) {
    const char = string[i]
    seen[char] ? seen[char].total++ : seen[char] = { total: 1, used: 0 }

    if (char === letterRanks[0]) {
      updateVars(char)

      while (seen[letterRanks[0]] && seen[letterRanks[0]].used === letterCounts[letterRanks[0]]) {
        letterRanks.shift()
      }

    } else if (seen[char].total > letterCounts[char] + seen[char].used) {

      if (char < bestSeen.char) {
        updateVars(char)

      } else {
        while (i < bestSeen.idx) {
          seen[string[i]].total--
          i++
        }
        updateVars(string[i])
      }
    } else {
      if (char < bestSeen.char && seen[char].used < letterCounts[char]) {
        bestSeen.char = char
        bestSeen.idx = i
      }
    }
  }
  return result
}
