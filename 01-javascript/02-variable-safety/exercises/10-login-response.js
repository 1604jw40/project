const username = "kim";
const password = "1234";

const savedUsername = "kim";
const savedPassword = "1234";

let statusCode = 200;
let message = "Login success";

if (username !== savedUsername || password !== savedPassword) {
  statusCode = 401;
  message = "Invalid credentials";
}

const response = {
  statusCode: statusCode,
  message: message,
};

console.log(response);