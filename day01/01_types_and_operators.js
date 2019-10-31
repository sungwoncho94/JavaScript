// Types and Operators (타입과 연산자)
// Primitive Type

// Numbers
const a = 13
const b = -1
const c = 3.14 // float
const d = 2.998e8  // 2.998 * e^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number (숫자가 아닌 숫자를 뜻하는.. 값.. 자기 자신이 아닌 값)

console.log(a, b, c, d, e, f, g)

console.log( 5 / '안녕')

// string
const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"
const sentence3 = `Ask and go to the blue`
console.log( sentence1)
console.log( sentence2)
console.log( sentence3)

// 따옴표를 사용하면 줄바꿈이 안됨
const word = '안녕\n하세요'
console.log(word)

// ` `을 사용하면 줄바꿈 가능, \n사용 불가능, Template literal 사용할 수 있음
const word2 = `안녕
하세요`
console.log(word2)

// Template Literal
// ` `만 가능! , '' or "" 불가능
const age = 10
const message = `홍길동의 나이는 ${age}입니다`
console.log(message)

console.log('Happy' + "Hacking" + `!!`)

let firstName // 선언하고 할당하지 않음 -> undefined

let lastName = null  //  우리가 의도적으로 값이 없음을 표시할 때

let student = {}
students.jason  // undefined

let lastNmae = nulll


// 할당연산자

// (4) 논리 연산자
// && (and)  =  둘 다 참일때만 참을 반환
// || (or) = 둘 중 하나라도 참이면 참을 반환
// ! (not) = !true -> false  /  !false -> true  (값이 하나만 있어도 계산됨)

// (5) 삼항연산자
// 가장 앞의 boolean 값이 참이면 : 앞의 값이 반환, 그렇지 않다면 : 뒤의 값이 반환
let flag = true
flag ? '참이니' : '거짓이니'
console.log(result)  //   참이니