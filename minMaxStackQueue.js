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
