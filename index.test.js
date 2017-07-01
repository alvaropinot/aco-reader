const test = require('tape')
const acoReader = require('./index')

test('should read .aco files', function(t) {
  t.plan(2)
  acoReader.toJSON('./fixtures/bar.aco', function(err, palette) {
    const actual = palette
    const expected = [{
        hex: '#cef5ce',
        name: 'Bleachgreen',
        w: 'cece',
        x: 'f5f5',
        y: 'cece',
      },
      {
        hex: '#96f5f3',
        name: 'kushal',
        w: '9696',
        x: 'f5f5',
        y: 'f3f3',
      },
      {
        hex: '#f5a3c0',
        // works with names with spaces =)
        name: 'pinku dreams',
        w: 'f5f5',
        x: 'a3a3',
        y: 'c0c0',
      },
      {
        hex: '#f1f5a3',
        name: 'my2265',
        w: 'f1f1',
        x: 'f5f5',
        y: 'a3a3',
      }
    ]
    t.deepEqual(actual, expected, 'should return a palette')
    t.equal(err, null, 'there should be no error')
  })
});

test('should return an error when the file is non existent', (t) => {
  t.plan(1)
  acoReader.toJSON('./fixtures/NON_EXISTENT_FILE', function(err, palette) {
    const actual = err.code
    const expected = 'ENOENT'
    t.equal(actual, expected, 'should return the fs error code')
  })

})
