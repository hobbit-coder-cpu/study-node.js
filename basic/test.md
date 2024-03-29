## 자바스크립트를 실행하려면 자바스크립트 엔진이 필요!

## interpreter
# 한줄 한줄 해석하고 실행 (매우 느림)
# high level lang -> ( interpreter ) -> output

## compiler
# high level lang -> ( compiler ) -> machine lang -> output

## JIT Compiliation (Just In Time) 
# 초기에 자바스크립트 엔진은 그저 인터프리터 였다면 
# 현재는 JIT Compiliation을 이용
# 이유는 더 나은 퍼포먼스를 위해 

## 자바스크립트를 브라우저 밖에서 이용하려면? 
# Node.js를 이용하면 자바스크립트 밖에서도 사용 가능.

## Node.js Runtime ? 
# 프로그래밍 언어가 구동되는 환경

## Node.js Runtime Environment
# V8 - 자바 스크립트 코드 실행 
# libuv - 자바스크립트 읽는 것 이외에 데이터베이스 접근, 파일 읽기 등은 libuv 가 처리



## 설치 유무 확인 방법
# cmd, node --version

## 노드 환경 진입 방법 / 노드 환경 나오기
# cmd, node 
# .exit

# REPL (Read Eval Print Loop)

## Browser API & Node.js API

## 브라우저와 Node.js 모두에서 사용하는 API
# console api

## 브라우저 API인 window 객체 사용
# globalThis? 

## Node.js API인 Process 객체 사용

## global 객체에 대해
# browser apis - window, document, history, location, navigator
# node.js apis - global(globalThis), process, module, filename, require() 

## 비슷한 API * Node.js가 Browser의 convention을 따르는 것
# url , settimeout 

## Node.js 가 작업을 처리하는 방법
# v8 -> Node.js APIs -> Node.js bindings -> libuv
# v8이 코드를 해석하고 Node.js APIs들 중 하나의 함수를 호출하고 Node.js 바인딩을 통해서 libuv 의해서 원하는 작업을 처리

## libuv
# https://github.com/libuv/libuv
# 이벤트 루프를 기반으로 하는 비동기 IO에 대한 지원을 제공하는 다중 플랫폼 C 라이브러리
# 각 플랫폼의 가장 빠른 비동기 IO 인터페이스를 통일된 코드로 돌릴 수 있는 장점이 있다.
# 파일 시스템, DNS, 네트워크, 파이프, 신호 처리, 폴링 및 스트리밍을 처리하는 매커니즘 제공

## 자바스크립트는 동기 언어 
# 비동기 코드를 작성하기 위해서 자바스크립트 이외의 도움을 받는다.
# ex) setTimeout - Node.js APIs

## blocking / non-blocking
# blocking 은 Node.js 프로세스에서 추가적인 JS 실행이 JS가 아닌 작업이 먼저 완료 될 때까지 기다려야 하는 경우.
# 이는 blocking 작업이 발생하는 동안 이벤트 루프가 JS를 계속 실행 할수 없기 때문에 발생
# Node.js 표준 라이브러리의 모든 IO 메서드는 non-blocking 및 callback 함수를 허용하는 비동기 버전을 제공.
# readFileSync - readFile( , callback)

## 프로세스 및 스레드

## 동시성 , 병렬성
# 프로세서가 프로세스를 하나씩 조금씩 바르게 처리해서 모든 프로세스를 처리하는 것 처럼 보이는 것 (Concurrent)
# 여러개의 프로세스를 각각 동시에 처리해주는 것 (Parallel)

## 노드JS가 비동기 작업을 처리하는 방법
# 자바스크립트는 싱글 스레드
# libuv에서 제공하는 이벤트 루프를 사용하여 비동기 작업 위임
# libuv는 해당 비동기 작업이 OS커널에서 할수 있는 것인지, 아닌지(Thread Pool에서 처리)를 판단하여 비동기 함수를 처리. 처리 후 콜백 함수 호출

## CommonJS 모듈 vs ECMAScript 모듈 
# [CommonJS 모듈]
# - module.exports = 
# - require('')

# [ECMAScript 모듈]
# - export {} 
# - import {} from ''



## npm
# 오픈 소스 프로젝트 게시를 위한 온라인 레포지토리
# 패키지 설치, 버전 관린 및 종속성 관리를 지원하는 해당 저장소와 상호 작용하기 위한 명령줄 유틸리티

## 앱에 npm 패키지 설치 방법
# package.json 파일 생성 - npm init -y
# axios 패키지 설치 - npm install axios

## Semantic Versioning(SemVer)
# 패키지 버젼은 세자리로 되어있음. 
# 각 자리의 의미
# 1 - major version (호환되지 않는 API 변경시)
# 2 - minor version (호환되는 방식으로 기능 추가)
# 3 - patch version (호환되는 버그 수정시)

## SemVer 표현 방법 2가지
# 틸드(~) - 현재 지정한 버전의 마지막 자리 내의 범위에서만 자동 업데이트 
# ex) ~0.0.1 은 >= 0.0.1 <0.1.0
# ~0.1.1 은 >= 0.1.1 < 0.2.0
# ~0.1 은 >=0.1 < 0.2
# ~0 은 >= 0.0 < 1.0

# 캐럿(^) - 마이너 버전, 패치 버전은 하위 호환성이 보장되므로 마이너 버전까지 자동 업데이트 
# ex) ^1.0.5은 >= 1.0.5 < 2.0
# ^1.0 은 >= 1.0.0 < 2.0
# ^1 은 >= 1.0.0 < 2.0
# 메이저 버전에 1 미만인 경우 
# ^0.1.4 은 >= 0.1.4 < 0.2.0
# ^0.1 은 >= 0.1.0 < 0.2
# ^0.0.1 은 == 0.0.1

## npm audit 
# npm audit fix --force

## npm install -g
# 전역으로 설치된 패키지는 디렉터리에 관계없이 작동
# 전역 설치시 , github등에 소스 커밋시 다른 개발자들 역시 해당 모듈이 전역으로 설치되어 있어야하는 불편함 존재. 
# 따라서 로컬 설치 권장. 

## HTTP Method
# GET / POST / PUT / PATCH / DELETE 
# GET - url 매개변수 ?k=v
#     - 브라우저에 기록이 남음 / 캐시가 됨 

# POST - 데이터는 사용자가 볼수 없는 요청 본문으로 전송 
#      - 민감한 데이터 처리 / 길이 제한 없이 데이터 전송 

# PUT / PATCH 
# 공통점 : 데이터 수정을 위해 사용 
# 차이점 : 데이터 전체 교체 / 부분 교체

## status code

# 100 - 199 정보 코드

# 200 - 299 성공 코드 
# 200 - OK
# 201 - Created POST, PUT 요청 이후 
# 204 - No Content, 반환된 콘텐츠 없이 성공 

# 300 - 399 리다이렉션 코드
# 301 - Moved Permanently 요청한 리소스의 uri 가 변경 되었음.

# 400 - 499 클라이언트 오류
# 400 - Bad Request
# 401 - Unauthorized 실패한 인증. 
# 403 - Forbidden  콘텐츠 접근 권한이 없음. 401과 차이는 서버가 클라이언트가 누구인지 알고 있음. 
# 404 - Not Found

# 500 - 599 서버 오류 
# 500 - Internal Server Error

## middleware
# 미들웨어 기능은 애플리케이션의 요청-응답 주기에서 요청 객체, 응답 객체 , next 미들웨어에 접근할수 있는 기능입니다. next 미들웨어 기능은 일반적으로 next라는 변수로 표시. 미들웨어 등록시 . app.use() 함수 사용. 다음 미들웨어로 이동시 next() 함수 호출

## Router
# Router란 ? 클라이언트의 요청 경로에 따라 이 요청을 처리할 수있는 곳으로 기능을 전달해주는 것.




## Controller



