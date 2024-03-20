/*
 모듈에서 다른 모듈을 가져올 때(load) ECMAScript 모듈을 사용하든지.
 CommonJS 모듈을 사용하든지 해당 모듈을 캐싱하게 됨.
 */

 // 캐싱 확인 테스트 

 const cache1 = require('./cachingModule')
 const cache2 = require('./cachingModule')

 cache1.test()
 cache2.test()

 console.log(require.cache)