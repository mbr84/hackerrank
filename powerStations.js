function processData(input) {
  let [metadata, cities] = input.split("\n")
  const k = parseInt(metadata.split(" ")[1])
  cities = cities.split(" ").map(el => parseInt(el))
  let activeStations = 0;

  const towers = cities.reduce((acc, curr, idx) => {
      if (curr === 1) {
          acc.lastTower = idx
      }
      acc.towers.push(acc.lastTower)
      return acc
  }, { towers: [], lastTower: -1 })
      .towers

  for(let i = 0; i < towers.length;) {
      const takeIdx = Math.min(i + k - 1, towers.length - 1);
      const take = towers[takeIdx]
      if (take === -1 || take + k <= i) return console.log(-1)
      i = take + k;
      activeStations++
  }
   console.log(activeStations)
}
