# 01 JavaScript

백엔드 학습을 위한 JavaScript 기본기를 학습한다.

## 진행한 챕터

- [x] 01-syntax-basic
- [x] 02-variable-safety

## 01-syntax-basic에서 학습한 내용

- JavaScript 파일 실행
- `console.log()`
- 변수
- 기본 자료형
- 연산자
- 조건문
- 반복문
- 함수
- 배열
- 객체
- 배열 + 객체 + 조건문 + 반복문 종합 실습

## 02-variable-safety에서 학습한 내용

JavaScript에서 변수를 더 안정적으로 선언하고 사용하는 방법을 학습했다.

- `let`과 `const`의 차이
- `const`의 재대입 제한
- 객체와 배열에서 `const`의 의미
- 블록 스코프
- `var`를 새 코드에서 사용하지 않는 이유
- 조건에 따라 바뀌는 값은 `let` 사용
- 바뀌지 않는 값은 `const` 사용
- 백엔드 응답 형태를 객체로 구성하기
- 객체 속성 축약 문법

## 핵심 기준

기본적으로는 `const`를 먼저 고려한다.

```js
const username = "kim";
```

나중에 다시 대입해야 하는 값만 `let`을 사용한다.

```js
let statusCode = 200;

if (hasError) {
  statusCode = 500;
}
```

`var`는 새 코드에서 사용하지 않는다.

## 다음 단계

다음 챕터에서는 JavaScript 함수 사용을 더 안정적으로 연습한다.

예정 주제:

- 함수 선언
- 함수 매개변수
- 함수 반환값
- 조건문과 함수 조합
- 객체와 함수를 함께 사용하기
- 백엔드 로직을 함수로 분리하는 연습
