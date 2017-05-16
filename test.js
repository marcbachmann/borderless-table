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
assert.equal(lines1.length, 7, 'Table has 6 lines with the header, "-"-row and newline at end')
assert.equal(test1, [
  'name       country    ',
  '----------------------',
  'Tokyo      Japan      ',
  'New York   USA        ',
  'São Paulo  Brazil     ',
  'Zürich     Switzerland',
  ''
].join('\n'))

// all lines have the same length
lines1.forEach(function (line, i) {
  // except last line which is only there because of a newline char
  if (i < lines1.length - 1) assert.equal(line.length, 22)
  else assert.equal(line.length, 0)
})

console.log('Specific columns')
var test2 = table([
  {name: 'Tokyo', country: 'Japan'},
  {name: 'New York', country: 'USA'},
  {name: 'São Paulo', country: 'Brazil'},
  {name: 'Zürich', country: 'Switzerland'}
], ['country'])

assert.equal(test2, [
  'country    ',
  '-----------',
  'Japan      ',
  'USA        ',
  'Brazil     ',
  'Switzerland',
  ''
].join('\n'))

console.log('Labels')
var test3 = table([
  {name: 'Tokyo', country: 'Japan'},
  {name: 'New York', country: 'USA'},
  {name: 'São Paulo', country: 'Brazil'},
  {name: 'Zürich', country: 'Switzerland'}
], ['name'], ['Some cities'])

assert.equal(test3, [
  'Some cities',
  '-----------',
  'Tokyo      ',
  'New York   ',
  'São Paulo  ',
  'Zürich     ',
  ''
].join('\n'))
