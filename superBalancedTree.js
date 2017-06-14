
BinaryTreeNode.prototype.isSuperBalanced = function() {
    const nodeStack = this.children()
    const depths = {}
    depths[this.value] = 1
    let deepestNode = 0;
    let shallowestNode = Infinity;
    let currentNode = this

    while (nodeStack.length > 0) {
        let children = currentNode.children().filter(child => child)
        if (children.length === 0) {
            deepestNode = depths[currentNode.value] > deepestNode ? depths[currentNode.value] : deepestNode
            shallowestNode = depths[currentNode.value] < shallowestNode ? depths[currentNode.value] : shallowestNode
            if (deepestNode - shallowestNode > 1) return false
        } else {
            children.forEach(child => {
                depths[child.value] = depths[currentNode.value] + 1
                nodeStack.push(child)
            })
        }

        currentNode = nodeStack.pop()
    }
    return true
}
