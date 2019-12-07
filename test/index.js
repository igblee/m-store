const store = require('../dist/store-commonjs2')
console.log('TCL: store', store)
const res = new store({ state: {}, mutations: {}, actions: {} })
console.log('TCL: res', res.commit)
