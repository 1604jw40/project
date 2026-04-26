# JavaScript Syntax Basic Notes

## console.log

`console.log()`는 값을 터미널에 출력한다.

```js
console.log("Hello, JavaScript!");
```

## 변수

변수는 값을 담는 이름이다.

```js
let userName = "Jinwoo";
let userAge = 25;
let isLearningBackend = true;
```

## 기본 자료형

- string: 문자열
- number: 숫자
- boolean: 참/거짓

## 조건문

조건문은 조건에 따라 다른 코드를 실행할 때 사용한다.

```js
let userAge = 25;

if (userAge >= 18) {
  console.log("성인 사용자");
} else {
  console.log("미성년 사용자");
}
```

JavaScript 조건문은 `{ }`로 코드 블록을 감싼다.

## 반복문

반복문은 같은 작업을 여러 번 실행할 때 사용한다.

```js
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

배열은 0번부터 시작한다.
