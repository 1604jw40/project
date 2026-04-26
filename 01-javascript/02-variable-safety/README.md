# 02-variable-safety

JavaScript에서 변수를 더 안전하게 사용하는 방법을 학습한다.

## 학습 목표

- `let`과 `const`의 차이를 이해한다.
- `const`가 재대입을 막는다는 점을 이해한다.
- 객체와 배열에서 `const`의 의미를 이해한다.
- 블록 스코프를 이해한다.
- `var`를 새 코드에서 사용하지 않는 이유를 이해한다.
- 백엔드 응답 형태를 객체로 구성해본다.

## 핵심 정리

### let

값을 나중에 다시 대입해야 할 때 사용한다.

```js
let count = 0;
count = 1;
```

### const

값을 다시 대입하지 않을 때 사용한다.

```js
const username = "kim";
```

기본적으로는 먼저 `const`를 고려하고, 다시 대입이 필요할 때만 `let`을 사용한다.

## const와 객체

`const`는 변수에 새 값을 다시 대입하는 것을 막는다.

```js
const user = {
  name: "Kim",
  age: 20,
};

user.age = 21;
```

위 코드는 가능하다.  
`user` 변수를 새 객체로 바꾼 것이 아니라, 객체 내부 값을 수정한 것이기 때문이다.

```js
user = {
  name: "Lee",
  age: 30,
};
```

위 코드는 불가능하다.  
`const` 변수에 새 객체를 다시 대입하려고 했기 때문이다.

## const와 배열

```js
const numbers = [10, 20, 30];

numbers.push(40);
numbers[0] = 99;
```

배열 내부 변경은 가능하다.

```js
numbers = [1, 2, 3];
```

하지만 새 배열을 다시 대입하는 것은 불가능하다.

## 블록 스코프

`let`과 `const`는 `{}` 안에서 선언하면 그 블록 안에서만 사용할 수 있다.

```js
if (true) {
  const message = "Welcome";
  console.log(message);
}

console.log(message); // ReferenceError
```

블록 밖에서도 사용해야 한다면 바깥에서 선언해야 한다.

```js
let message = "";

if (true) {
  message = "Welcome";
}

console.log(message);
```

## var를 사용하지 않는 이유

`var`는 블록 스코프가 아니라 함수 스코프를 가진다.

```js
if (true) {
  var oldMessage = "var";
}

console.log(oldMessage);
```

`if` 블록 밖에서도 접근된다.  
이런 동작은 실수를 만들기 쉬우므로 새 코드에서는 `var`를 사용하지 않는다.

## 백엔드와 연결되는 부분

백엔드 코드에서는 상태 코드나 응답 메시지처럼 조건에 따라 바뀌는 값이 자주 나온다.

```js
let statusCode = 200;
let message = "Login success";

if (username !== savedUsername || password !== savedPassword) {
  statusCode = 401;
  message = "Invalid credentials";
}
```

응답 데이터는 객체로 묶을 수 있다.

```js
const response = {
  statusCode,
  message,
};
```

이후 Express 단계에서는 비슷한 형태로 JSON 응답을 보낸다.

```js
res.status(statusCode).json({
  message,
});
```

## 완료한 실습

- `01-let-const.js`
- `02-const-reassign.js`
- `03-const-array.js`
- `04-choose-let-const.js`
- `05-practice-let-const.js`
- `06-block-scope.js`
- `07-scope-fix.js`
- `08-var-vs-let.js`
- `09-login-status.js`
- `10-login-response.js`
- `11-object-shorthand.js`

## 정리

이번 단계에서는 JavaScript에서 변수를 선언할 때의 기본 기준을 학습했다.

- 기본은 `const`
- 다시 대입이 필요하면 `let`
- `var`는 사용하지 않음
- 객체와 배열은 `const`로 선언해도 내부 값은 바꿀 수 있음
- `let`과 `const`는 블록 스코프를 가짐
