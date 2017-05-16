module.exports = table

function table (json, rows, headers, stdout) {
  if (!rows) rows = Object.keys(json[0])
  if (!stdout) stdout = {write: console.log.bind(console)}

  var lengths = map(rows, function (key, i) {
    return Math.max(
      key.length,
      (headers && headers[i] && headers[i].length) || 0,
      maxLength(json, key)
    )
  })

  var header = map(rows, function (r, i) {
    return pad(headers && headers[i] || r, lengths[i])
  }).join('  ')

  var str = header + '\n' +
    pad('', header.length, '-') + '\n' +
    map(json, toLines(rows, lengths)).join('\n') + '\n'

  stdout.write(str)
  return str
}

function toLines (cols, lengths) {
  return function (obj) {
    return map(cols, function (col, i) {
      return pad(obj[col], lengths[i])
    }).join('  ')
  }
}

function maxLength (arr, key) {
  if (!arr) return 0
  var e
  var length
  var longest = 0
  for (var i = 0; i < arr.length; i++) {
    e = arr[i]
    if ((length = e && e[key] && String(e[key]).length) && length > longest) longest = length
  }
  return longest
}

function map (arr, method) { return (arr || []).map(method) }

function pad (str, length, char) {
  if (!char) char = ' '
  if (typeof str === 'undefined') str = ''
  var needed = length - String(str).length
  for (var i = 0; i < needed; i++) str += char
  return str
}
