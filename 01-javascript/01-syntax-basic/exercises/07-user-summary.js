// 1. users 배열을 만든다.
// 2. 배열 안에는 사용자 객체 3개를 넣는다.
// 3. 각 사용자 객체는 name, age 속성을 가진다.
// 4. for문으로 users를 반복한다.
// 5. age가 18 이상인 사용자 이름만 출력한다.

let users = [
  { name: "Kim", age: 17 },
  { name: "Lee", age: 22 },
  { name: "Park", age: 30 },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    console.log(users[i].name);
  }
}