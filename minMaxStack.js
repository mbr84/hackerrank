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
