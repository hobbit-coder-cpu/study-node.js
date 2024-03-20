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



