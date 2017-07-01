# aco-reader
Transform `.aco` files to JSON format.

## Install

```sh
$ npm install -S aco-reader
```

## Usage


```js
const acoReader = require('aco-reader')
acoReader.toJSON('./my-palette.aco', function(err, palette) {
  console.log(palette)
})
```

**Output**
```js
[
 {
   name: 'A cool color',
   hex: '#ff0066'
 },
 {
   name: 'Another cool color',
   hex: '#ffbb00'
 }
]
```
