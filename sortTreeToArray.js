var sortTree = (root) => {
	const stack = [root]
	const sorted = new Set()
	const result = []
  let currentNode;
	const depthTraversal = node => {
		if (node.left && !sorted.has(node.left)) {
			stack.push(node)
			depthTraversal(node.left)
    } else {
			result.push(node)
			sorted.add(node)
			if (node.right) stack.push(node.right)
    }
  }


	while(stack.length) {
    currentNode = stack.pop()
		depthTraversal(currentNode)
  }
	return result
}
