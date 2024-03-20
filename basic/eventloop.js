/* Event loop

# setImmediate / setTimeout / setInterval / process.nextTick
# 처리 단계 
# setTimeout / setInterval - event loop, timer 단계에서 처리
# setImmediate - event loop, check 단계에서 처리
# process.nextTick - 이벤트 루프 시작시와 이벤트 루프의 각 단계 사이 

*/
/* 
setTimeout(() => {
    console.log('timeout')
}, 0);

setImmediate(() => {
    console.log('immediate')
});
process.nextTick(() => {
    console.log('nextTick')
});
console.log('current event loop');

결과: 
current event loop
nextTick
timeout
immediate
 */

/* 
Case 1.  nextTick 재귀 호출 시. event loop 가 차단됨.

let count = 0
const cb = () => {
    console.log(`processing nextTick cb ${++count}`)
    process.nextTick(cb) 
}

setImmediate(()=> {
    console.log(`setImmediate is called`)
})

setTimeout(() => {
    console.log(`setTimeout executed`)
}, 100)

process.nextTick(cb)
console.log('Start') 
*/

/* Case 2. setImmediate 재귀 함수 호출시.
let count = 0
const cb = () => {
    if(count < 1000) {
        console.log(`pProcessing setImmediate cb ${++count}`)
        setImmediate(cb)
    }
}
setImmediate(cb)
setTimeout(() => {
    console.log(`setTimeout executed`)
}, 50);
console.log('Start')

process.nextTick 보다는 setImmediate를 추천
*/

/* 
Case 3. setTimeout 과 setImmediate 호출 순서 (랜덤)
setTimeout(() => {
    console.log('timeout')
}, 0);

setImmediate(() => {
    console.log('immediate')
})
 */

/*  
Case 4. IO 사이클 안에서 setTimeout 과 setImmediate 호출 순서 (항상 setImmediate)
const fs = require('fs')
const cb1 = () => {
        console.log('timeout')
    };
const cb2 = () => {
        console.log('immediate')
    };

fs.readFile("./readme.txt", () => {
    setTimeout(cb1, 0);
    
    setImmediate(cb2);    
})

1. fs.readFile 함수 호출시 이벤트 루프는 libuv 에게 작업 위임.
2. 파일 읽기는 libuv에 있는 스레드 풀의 스레드에서 작업을 처리
3. 작업이 완료되면 이벤트 루프는 Pending IO callback phase의 
pending_queue에 작업의 콜백 등록.
4. 이벤트 루프가 Pending IO callback phase를 지날 때 pending_queue에 등록된 콜백을 실행
5. setTimeout 이 Timer phase 큐에 등록. (해당 콜백은  다음 Timer phase에 실행)
6. setImmediate의 콜백이 Check phase의 check_queue에 등록
7. Poll phase는 할일이 없어서 넘어간다.
8. Check phase의 큐에는 작업이 있으므로 Check phase로 이동
9. setImmediate의 콜백함수(콘솔)을 호출하고 Timer phase에는
타이머가 등록되어 있으므로 다시 이벤트 루프 시작.
 */