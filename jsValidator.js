function isValid(string) {
    const openersToClosers = {"{": "}", "[": "]", "(": ")"}
    const closers = new Set(["}", "]", ")"])
    const validClosers = ["}"]

    for (let i = 1; i < string.length; i++) {
        if (openersToClosers[string[i]]) {
            validClosers.push(openersToClosers[string[i]])
        } else if (closers.has(string[i])) {
            if (string[i] !== validClosers.pop()) return false
        }
    }
	return true
}
