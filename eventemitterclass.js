/* 
[Node.js Event Emiiter]
-  백엔드 측에서 Node.js도 event-driven 시스템을 이용해서 작동

[Observer Design Pattern]
- event-driven 시스템을 이용하는 것을 Observer Design Pattern이라고도 부른다.
- Publisher-Subscriber 모델이라고도 한다.

[Event Emiiter Class]
- Node.js 도 Event모듈을 사용하여 유사한 시스템을 구축할수 있는 옵션 제공
 */


const EventEmitter = require("node:events")

const celebrity = new EventEmitter();

// Observer(콜백) #1 가 구독
celebrity.on('update post', () => {
    console.log('This post is so awesome')
})

// Observer(콜백) #2 가 구독
celebrity.on('update post', () => {
    console.log('I like this post!')
})

celebrity.emit('update post');