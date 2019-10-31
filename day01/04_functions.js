// 함수 선언식
// 가장 밑에 함수를 만들어도 위에서 사용할 수 있다.

function add(num1, num2) {
  return num1 + num2

}

add(1, 2)


// 함수 표현식 (함수를 선언하면서 변수에 담는 것)
// 함수 자체를 반환할 수 있도록 만들어서 변수에 넣어준다
// 함수 표현식을 지나지 않으면 인식하지 못한다.
const sub = function(num1, num2) {
  return num1 - num2
}


// arrow function
// ES6 이후 문법
// 함수 선언이 없고, 변수에 넣어주는 식으로 표현해야 한다.  ->  항상 익명함수로밖에 쓸 수 없다
// 변수에 할당을 한 형태로 쓰는 것. 함수의 이름 자체는 없음
let addOne = function(num) {
  return num + 1
}

const addone = (num) => {
  return num + 2
}

// 한줄짜리 return 문일 때, 중괄호 없이 return을 생략할 수 있다 -> 중괄호 없이 바로 반환하겠다는 뜻
addOne = (num) => num + 1

// 매개변수가 한개만 들어올 때, 괄호도 생략할 수 있다
addOne = num => num + 1


// Q. name이라는 인자를 받아서 hello ${name}을 반환하는 함수를 선언식, 표현식, arror로 만들어보기
name = prompt('이름을 알려주세요')

function greeting(name) {
  return `hello, ${name}^ㅇ^`
}


const greeting2 = function(name) {
  return `hello, ${name}^ㅇ^`
}

const greeting3 = name => `hello, ${name}^ㅇ^`

// Q. object를 반환하는 arrow function

const makeObject = (value) => {
  return {'key': value}
}

const makeObject2 = value => {'key': value}


const noArgs = () => 'NO args'