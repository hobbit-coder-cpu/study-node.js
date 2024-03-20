// exports 하는 여러가지 방법

// 상수 export
module.exports.A = 10

// 함수 export
module.exports.encrypt = function (data) {
    return 'encrypted data'
}

// [가장 좋은 module 사용 방법]
/* 
module.exports = {
    // 원하는 변수, 함수 
}

const { send } = require('')
 */