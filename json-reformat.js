var _ = require('lodash')

var quote = function(input) {
	try {
		return JSON.stringify(JSON.parse(input), null, "\t")
	} catch(e) {
		// maybe this is json where each line is its own document
		try {
			return '[\n' + input.split(/\r\n|\n\r|\n|\r/).filter(line => !!line).map(line => line.trim()).map(line => JSON.parse(line)).map(doc => JSON.stringify(doc, null, '\t')).join(',\n') + '\n]'
		} catch(ex) {
			console.error(e)
			console.error(ex)
			throw ex
		}
	}
}

module.exports = quote
