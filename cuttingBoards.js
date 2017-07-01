function processData(input) {
    //Enter your code here
    const cutBoard = (arr1, arr2) => {
      arr1.sort((a, b) => b - a)
      arr2.sort((a, b) => b - a)
      let verticalSegments = 1,
         horizontalSegments = 1,
         totalCost = 0,
         i = 0,
         j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] * verticalSegments + arr2[j] * (horizontalSegments + 1) > arr2[j] * horizontalSegments + arr1[i] * (verticalSegments + 1)) {
          totalCost += arr2[j] * horizontalSegments
          j++
          verticalSegments++
        } else {
          totalCost += arr1[i] * verticalSegments
          i++
          horizontalSegments++
        }
      }
      totalCost += arr1.slice(i).reduce((acc, curr) => acc + curr * verticalSegments, 0)
      totalCost += arr2.slice(j).reduce((acc, curr) => acc + curr * horizontalSegments, 0)
      return totalCost % (Math.pow(10, 9) + 7)
    }
    const data = input.split("\n")
    const numTests = data.shift()
    for (let i = 0; i < numTests; i++) {
        const arr1 = data[1 + (i * 3)].split(" ")
        const arr2 = data[2 + (i * 3)].split(" ")
        console.log(cutBoard(arr1, arr2))
    }

}
