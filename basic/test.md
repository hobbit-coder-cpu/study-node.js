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

