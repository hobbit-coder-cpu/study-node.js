// local module 테스트 
// 모듈 파일 확장자는 *.mjs
import {send} from './requestModuleTest.mjs'
import {read} from './responseModuleTest.mjs'

function makeRequest(url, data) {
    // 요청 보내기
    send(url, data);
    
    // 데이터를 return 하기
    return read();
}

const response = makeRequest('https://naver.com', 'any data');
console.log(response)