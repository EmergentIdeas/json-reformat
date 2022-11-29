#! /usr/local/bin/node
var quote = require('./json-reformat')
var transformer = require('console-in-transformer')

transformer(quote, '\n')
