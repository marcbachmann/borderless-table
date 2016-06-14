var assert = require('assert')
var table = require('./table')

console.log('General tests')
var test1 = table([
  {name: 'Tokyo', country: 'Japan'},
  {name: 'New York', country: 'USA'},
  {name: 'São Paulo', country: 'Brazil'},
  {name: 'Zürich', country: 'Switzerland'}
])

// Returns the table
assert.equal(typeof test1, 'string', 'Returns the table as string')

var lines1 = test1.split('\n')
assert.equal(test1.split('\n').length, 6, 'Table has 6 lines with the header and "-"-row')
assert.ok(/^name/.test(lines1[0]))
assert.ok(/^-*$/.test(lines1[1]))
assert.ok(/^Tokyo/.test(lines1[2]))
assert.ok(/^New York/.test(lines1[3]))

// Country begins at char 11 (sao paulo length & '  ' spaces)
assert.ok(/^.{11}country/.test(lines1[0]))
assert.ok(/^.{11}Japan/.test(lines1[2]))

// all lines have the same length
lines1.forEach(function (line) {
  assert.equal(line.length, 22)
})

console.log('\nSpecific columns')
var test2 = table([
  {name: 'Tokyo', country: 'Japan'},
  {name: 'New York', country: 'USA'},
  {name: 'São Paulo', country: 'Brazil'},
  {name: 'Zürich', country: 'Switzerland'}
], ['country'])

var lines2 = test2.split('\n')
assert.ok(/^country/.test(lines2[0]))
assert.ok(/^Japan/.test(lines2[2]))

console.log('\nLabels')
var test3 = table([
  {name: 'Tokyo', country: 'Japan'},
  {name: 'New York', country: 'USA'},
  {name: 'São Paulo', country: 'Brazil'},
  {name: 'Zürich', country: 'Switzerland'}
], ['name'], ['Some cities'])

var lines3 = test3.split('\n')
assert.ok(/^Some cities/.test(lines3[0]))
assert.ok(/^Tokyo/.test(lines3[2]))
