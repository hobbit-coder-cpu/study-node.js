// local module 테스트 

function makeRequest(url, data) {
    // 요청 보내기
    const req = require('./requestModuleTest')
    req.send(url, data);
    // 데이터를 return 하기
    const res = require('./responseModuleTest')
    return res.read();
}

const response = makeRequest('https://naver.com', 'any data');
console.log(response)