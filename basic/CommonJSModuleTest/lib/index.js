
// 방법 #1
/* 
module.exports = {
    am: require('./aModule'),
    bm: require('./bModule')
}
 */

// 방법 #2
const am = require('./aModule')
const bm = require('./bModule')

module.exports = {
    aFunc: am.aFunc,
    bFunc: bm.bFunc
}

