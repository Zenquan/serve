const fs = require('fs')

function file(filePath, type) {
	let content = fs.readFileSync(filePath, type)
	return content
}

module.exports = file