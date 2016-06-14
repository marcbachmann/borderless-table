# borderless-table

Takes a collection and outputs a borderless table in the terminal or browser console.

# API

```javascript
var table = require('borderless-table')
table(collection, [columns], [columnLabels], [stdout])
```


### Output keys that are contained in the first object
```javascript
table([
  {name: 'Tokyo', country: 'Japan'},
  {name: 'New York', country: 'USA'},
  {name: 'São Paulo', country: 'Brazil'},
  {name: 'Zürich', country: 'Switzerland'},
])

// name       country    
// ----------------------
// Tokyo      Japan      
// New York   USA        
// São Paulo  Brazil     
// Zürich     Switzerland
```

### Output specific properties
```javascript
table([
  {name: 'Tokyo', country: 'Japan'},
], ['name'])

// name     
// ---------
// Tokyo    
```


### Use a custom column label
```
table([
  {name: 'Tokyo', country: 'Japan'},
], ['name'], ['City name'])

// City name
// ---------
// Tokyo    
```
