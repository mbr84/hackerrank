class MinMaxStack {
	constructor() {
		this.data = [];
    }

	max() {
		const topItem = this.data[this.data.length - 1]
		return topItem ? topItem[2] : null
  }
	min() {
		const topItem = this.data[this.data.length - 1]
		return topItem ? topItem[1] : null
  }

	push(int) {
		const newMax = this.max() && this.max() > int ? this.max(): int
		const newMin = this.min() && this.min() < int ? this.min(): int
		const newItem = [int, newMin, newMax]
		this.data.push(newItem)
  }

	pop() {
		const item = this.data.pop()
		return item[0]
  }

  length() {
    return this.data.length
  }
}

class MinMaxStackQueue {
  constructor(k) {
    this.maxLength = k
    this.leftStack = new MinMaxStack()
    this.rightStack = new MinMaxStack()
  }

  enqueue(int) {
    this.leftStack.push(int)
    if (this.length() > this.maxLength) {
      this.dequeue()
    }
  }

  dequeue() {
    if (this.rightStack.length() === 0) {
      while (this.leftStack.length() > 0) {
        this.rightStack.push(this.leftStack.pop())
      }
    }
    return this.rightStack.pop()
  }

  length() {
    return this.leftStack.length() + this.rightStack.length()
  }

  max() {
    const maxes = [this.leftStack.max(), this.rightStack.max()].filter(el => el !== null)
    return Math.max(...maxes)
  }

  min() {
    const mins = [this.leftStack.min(), this.rightStack.min()].filter(el => el !== null)
    return Math.min(...mins)
  }
}

const minimalUnfairness = data => {
  const array = input.split("\n").map(el => parseInt(el))
    const k = array[1]
    const values = array.slice(2).sort((a, b) => a - b)
    let maxFairness = Infinity;
    const stackQueue = new MinMaxStackQueue(k)
    for (var i = 0; i < k - 1; i++) { stackQueue.enqueue(values[i])}
    const mostFair = values.slice(i).forEach(el => {
        stackQueue.enqueue(el)
        const currentFairness = stackQueue.max() - stackQueue.min()
        maxFairness = maxFairness < currentFairness ? maxFairness : currentFairness
    })
    console.log(maxFairness)
}
