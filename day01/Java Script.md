# Java Script _day01

- Java Script가 body 아래쪽에 작성되는 이유

  - ux적인 측면 : 사용자에게 화면을 먼저 보여준 후, 시간을 들여 자바스크립트 코드를 읽게하기 위해
  - 버튼 클릭 시 어떤 이벤트를 실행하는 태그같은 경우, 버튼이 로드되지 않았기 때문에 이벤트 자체가 취소되어버릴 수 있음

- <script></script> : script 태그 안에 자바스크립트를 작성

- 하지 말아야 할 것

  - ==으로 비교하지 않기
  - var로 변수 선언하지 않기

## Variable : 언어의 특징

1. JS에서 모든 언어는 재선언은 할 수 없음. 재할당만 가능하다

```javascript
// 최초 x 선언 및 할당
let x = 1
// let x = 3  (재선언 불가능)
// 재할당 가능
x = 3
```

2. let : 값을 재할당 할 수 있는 변수를 선언하는 키워드 

```javascript
// 블럭 유효 범위(block 단위 scope)를 갖는다.
// { }안에서는 변수가 독립적으로 존재할 수 있다.
    if (x === 4) {
      let x = '안녕하세요'
      console.log(x)
    }
    
    console.log(x)

// 메세지를 global에서 찾을 수 없다는 error가 뜬다
// Uncaught ReferenceError: message is not defined
    if (x === 4) {
      let message = '메세지입니다'
      console.log(message)
    }

    console.log(message)
// 메세지를 global에서 찾을 수 없다는 error가 뜬다
```

```javascript
let y
console.log(y)

// 출력 : undefined (= python의 None)
```

3. const  =  값이 변하지 않는(재할당을 할 수 없는) 상수를 선언하는 키워드

```javascript
// 블록 유효 범위(block scope)를 가진다
// "모든" 선언에서 가능한 상수를 사용해야 한다.
// const로 선언할 때는 항상 값을 할당해줘야한다.

// (1) 값 할당X 오류 : Uncaught SyntaxError: Missing initializer in const declaration
const MY_FAV
console.log(MY_FAV)

// (2) 값 할당
const MY_FAV = 20
console.log(MY_FAV)

// (3) 재할당 불가 오류 : Uncaught TypeError: Assignment to constant variable.
const MY_FAV = 3
console.log(MY_FAV)

MY_FAV = 11

// (4) 블록단위 스코프
const MY_FAV = 20

if (MY_FAV === 20) {
  const MY_FAV = 30
  console.log(MY_FAV)  // 30
}

console.log(MY_FAV)  // 20
```

4. 식별자 (=변수명)

   - 반드시 문자, 달러($), 밑줄(_)로 시작해야한다.

   - 대, 소문자 구분하고 class이름을 제외하고는 대문자로 시작하지 않는 것을 권장

   - 예약어(const, let, class, return ..) 사용 불가
     
- 카멜 케이스(CamelCase)
  
  ```javascript
     // ex) 이벤트 핸들러 = 'on'으로 시작
     const onClick = () => {}
     
     // boolean값
     let isAvilable = false
     
     // 함수이름
     function getUsername () {}
  ```
  
- 파스칼케이스(PascalCase), (UpperCamelCase) - 클래스, 생성자 ...
  
  ```javascript
     class User {}
  ```
  
- 대문자 스네이크 케이스 - 상수
  
  ```javascript
     const API_KEY = 'asdfssg'
  ```



## Types_and_Operators

- Numbers

```javascript
const a = 13
const b = -1
const c = 3.14 // float
const d = 2.998e8  // 2.998 * e^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number (숫자가 아닌 숫자를 뜻하는.. 값.. 자기 자신이 아닌 값)
// console.log( 5 / '안녕') -> 불가한 연산을 할 때 값으로 나옴

console.log(a, b, c, d, e, f, g)

```

- String

```javascript
const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"
const sentence3 = `Ask and go to the blue`

// '따옴표'를 사용하면 줄바꿈이 안됨   /   \n 사용 가능
const word = '안녕\n하세요'
console.log(word)

// ` `을 사용하면 줄바꿈 가능, \n사용 불가능, Template literal 사용할 수 있음
const word2 = `안녕
하세요`
console.log(word2)

// Template Literal  (= python의 f'')
// ` `만 가능! , '' or "" 불가능
const age = 10
const message = `홍길동의 나이는 ${age}입니다`
console.log(message)

// 문자열끼리 더하기 가능
console.log('Happy' + "Hacking" + `!!`)  // HappyHacking!!
```

- Boolean
```javascript
// 소문자로 표시한다
true
false
```

- Empty Value
  값이 존재하지 않음을 표현하는 값

```javascript
undefined
null

// 두개가 존재하는 이유 -> 그냥 실수. but 매우 많은 프로그램들이 둘 다 사용하고 있기 때문에

// 킹리적 국룰로 이렇게 사용한다
let firstName // 선언하고 할당하지 않음 -> undefined
let student = {}
students.jason  // undefined

let lastName = null  //  우리가 의도적으로 값이 없음을 표시할 때

// js의 실수
typeof null
"object"
typeof undefined
"undefined"
```

- Operators (연산자)

```javascript
// += -= /= *= 등등 모두 사용 가능
// x++  ==  x += 1
// x--  ==  x -= 1
```

```javascript
// (1) 비교연산자
// 문자열 비교도 가능
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순
// 한글 비교도 가능

'A' < 'B'   // true
'A' < 'a'   // true
'가' < '나'  // true
'가' > '나'  // false

// (2) 동등연산자 (==)
// 메모리에 저장되어 있는 값이 서로 같은 값을 가질 수 있도록 한 뒤 비교할 수 있다면
// 서로 같은 값을 갖도록 변환할 수 있으면 같다고 판단.
// (JS엔진이 자동으로 형변환) -> 동등 연산자의 사용은 지양한다.
1 == '1'  // true
1 == Number('1')  // true

8 * null
0

// (3) 일치연산자 (===), (!==)
'== 대신 ===을 써야한다!'

// (4) 논리 연산자
// && (and)  =  둘 다 참일때만 참을 반환
// || (or) = 둘 중 하나라도 참이면 참을 반환
// ! (not) = !true -> false  /  !false -> true  (값이 하나만 있어도 계산됨)

// (5) 삼항연산자
// 가장 앞의 boolean 값이 참이면 : 앞의 값이 반환, 그렇지 않다면 : 뒤의 값이 반환
let flag = true
flag ? '참이니' : '거짓이니'
console.log(result)  //   참이니

```



## 조건문

- prompt = 브라우저한테 명령해서 이름을 받아서 변수로 넘겨줌

- 조건문

```javascript
const username = prompt('안녕하세요. 누구세요?')

if (username === 'saffy') {
  message = '<h1>싸피야 안녕?</h1>'
} else if (username === 'admin') {
  message = '<h1>주인님, 안녕하세요?</h1>'
} else {
  message = `${username}, 넌 싸피가 아니야!`
}

document.write(message)
```

- switch문

```javascript
// switch문
// 1로 들어왔으면 1, 2, 3이 출력되고, 2로 들어왔으면 2, 3이 출력되고..... so, break문이 필요하다
const username = prompt('Who R U?')

let message = ''

switch(username) {
  case 'ssafy': {
    message = '<h1>싸피야 안녕?</h1>'
    console.log(message)
    break
  }
  case 'admin': {
    message = '<h1>주인님, 안녕하세요?</h1>'
    console.log(message)
    break
  }
  default: {
    message = `${username}, 넌 싸피가 아니야!`
    console.log(message)
  }
}
document.write(message)
```

- 예시

```javascript
switch(사용자) {
  case '관리자': {
    사용자.권한 += '관리자 페이지 접근'
  }
  case '일반_사용자': {
    사용자.권환 += '쓰기'
  }
  default: {
    사용자.권한 += '읽기'
  }
}
```



## loop

- 기본 loop

```javascript
for (let i = 0; i < 5; i++) {
 console.log(i) 
}

const numbers = [0, 1, 2, 3, 4, 5, ]
```

- for loop

```javascript
// 변수선언이기 때문에 그냥 number of numbers라고 하면 안된다
for (const number of numbers) {
  console.log(number)
}
```

- while loop

```javascript
// while loop

let i = 0

while(i<5) {
  console.log(i)
  i++
}
```



## Functions

- 함수 선언식
  가장 밑에 함수를 만들어도 위쪽에서 사용할 수 있다.

```javascript
function add(num1, num2) {
  return num1 + num2

}

add(1, 2)
```

- 함수 표현식 (함수를 선언하면서 변수에 담는 것)
  함수 자체를 반환할 수 있또록 만들어서 변수에 넣어준다
  함수 표현식을 지나지 않으면 인식하지 못함

```javascript
const sub = function(num1, num2) {
  return num1 - num2
}
```

- arror function
  함수 선언이 없고, 변수에 넣어주는 식으로 표현해야 한다.  ->  항상 익명함수로밖에 쓸 수 없다
  변수에 할당을 한 형태로 쓰는 것. 함수의 이름 자체는 없음

```javascript
let addOne = function(num) {
  return num + 1
}

// function 생략하고, =>로 표시
const addone = (num) => {
  return num + 2
}

// 한줄짜리 return 문일 때, 중괄호 없이 return을 생략할 수 있다 -> 중괄호 없이 바로 반환하겠다는 뜻
addOne = (num) => num + 1

// 매개변수가 한개만 들어올 때, 괄호도 생략할 수 있다
addOne = num => num + 1
```

### Q.  name이라는 인자를 받아서 hello ${name}을 반환하는 함수를 선언식, 표현식, arror로 만들어보기 

```javascript
(1) 함수선언식
function greeting1(name) {
    return `hello, ${name}^ㅇ^`
}


(2) 함수표현식
const greeting2 = function(name) {
    return `hello, ${name}^ㅇ^`
}


(3) arrow function
const greeting3 = name => `hello, ${name}^ㅇ^`
```

### Q. object를 반환하는 arrow function 작성

```javascript
// 함수 표현식
const makeObject = (value) => {
  return {'key': value}
}

// arrow function
const makeObject2 = value => {'key': value}
// 딕셔너리의 {}로 인식하지 못하고 함수 시작의 { }로 인식한다.

const makeObject2 = value => ({'key': value})
// 소괄호 안에 object를 넣어주면 딕셔너리로 인식 가능
```

-  

```javascript
const noArgs = () => 'NO args'
```



## Data_structure

- array

```javascript
const numbers = [1, 2, 3, 4, 'a', 'a']

numbers[1]  // 2
numbers[0]  // undefined
numbers.length  // 4
numbers[numbers.length-1]  //  4

// 배열 뒤집기
numbers.reverse()  // [4, 3, 2, 1]
numbers  // [4, 3, 2, 1]  -> 원본까지 바뀐다

// 가장 마지막에 아이템 추가하기
numbers.push('abc')  
numbers  // [4, 3, 2, 1, "abc"]

// 가장 마지막 요소 삭제 후 반환
numbers.pop()  // 'abc'
numbers  // [4, 3, 2, 1]

// 가장 앞에 요소 추가한 후, 새로운 배열의 길이 반환
numbers.unshift('a')  // 5
numbers  // ["a", 4, 3, 2, 1]

// 배열의 첫 번째 요소 제거 후 반환
numbers.shift()  // 4
numbers  // [3, 2, 1]

// includes - 특정 item이 배열에 있는지 여부를 반환
numbers.includes(1)  // true
numbers.includes('abc')  // false

// indexOf - 특정 아이템의 index를 찾아서 반환
numbers  // [4, 3, 2, 1, "a", "a"]
numbers.indexOf('a')  // 4  (첫 번째 요소의 index를 반환)
numbers.indexOf('dd')  // -1  (일치하는 값이 없다면 -1반환)

// join - 배열의 아이템을 함수의 인자들 seperator로 이어서 문자열로 반환
numbers  // ["a", "a", 1, 2, 3, 4]
numbers.join()  // "a,a,1,2,3,4"
numbers.join('-')  // "a-a-1-2-3-4"
```

- object

```javascript
const name = '조뮁'

const me = {
  name,  // name: name이었는데, 변수의 이름과 key의 이름이 같다며 생략 가능
  // name: 'ssafy',  // 'name': 'ssafy' 도 가능
  'phone number': '010-2222-2222',
  phoneNumber : '010-1234-5678',  // 원래는 이렇게 작성되는게 맞다
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}


// 확인
me
{name: "ssafy", phone number: "010-2222-2222", phoneNumber: "010-1234-5678", appleProducts: {…}}
appleProducts: {macbook: "2018pro", iphone: "7"}
name: "ssafy"
phone number: "010-2222-2222"
phoneNumber: "010-1234-5678"
__proto__: Object


me.name
"ssafy"

me.appleProducts
{macbook: "2018pro", iphone: "7"}

me['name']
"ssafy"

me['appleProducts']
{macbook: "2018pro", iphone: "7"}

me.appleProducts.macbook
"2018pro"

me["appleProducts"]["iphone"]
"7"
```

- JSON

```javascript
const jsonData = JSON.stringify(me)
// stringify - 문자열로 바꾸라는 뜻
// 직렬화 작업 => JS object를 str으로 바꾼다

// 결과
jsonData
"{"name":"조뮁","phone number":"010-2222-2222","phoneNumber":"010-1234-5678","appleProducts":{"macbook":"2018pro","iphone":"7"}}"

const parsedData = JSON.parse(jsonData)
// 역직렬화 => string을 JS object로

// 결과
parsedData
{name: "조뮁", phone number: "010-2222-2222", phoneNumber: "010-1234-5678", appleProducts: {…}}
appleProducts: {macbook: "2018pro", iphone: "7"}
name: "조뮁"
phone number: "010-2222-2222"
phoneNumber: "010-1234-5678"
__proto__: Object

```

## array_helper_method

```javascript
// 원래 for문

const colors =['red', 'green', 'blue', 'orange']

for (const color of colors) {
  console.log(color)
}
```



- forEach()  - loop를 대신 돌아준다

```javascript
// forEach() 함수 사용  ->  하나씩 순회해서 어떤 작업을 할꺼야! 라는 함수
colors.forEach(function(color) {
  console.log(color)
})

// arrow function으로 바꾸기
colors.forEach(color => console.log(color))
```

- map - 배열 내 모든 요소에 대하여 주어진 함수를 호출한 결과를 보아 새로운 배열을 return
  일정한 형식의 새로운 배열을 만들 때 사용한다

```javascript
const numbers = [1, 2, 3, 4, 5]

const doubleNumbers = numbers.map(number => {
  return number * 2
})

// arrow 
const doubleNumbers = numbers.map(number => number * 2)

//결과
numbers
(5) [1, 2, 3, 4, 5]
doubleNumbers	
(5) [2, 4, 6, 8, 10]


// 예시2
const plusB = numbers.map(number => {
  return `B${number}`
})

//결과
plusB
(5) ["B1", "B2", "B3", "B4", "B5"]
```

```javascript
// Q. 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어보자!

const numbers2 = [4, 9, 16]

// 내 답
const my_sqrt = numbers2.map(number => Math.sqrt(number))

//(1)
numbers2.map(number => Math.sqrt(number))

//(2)
numbers2.map(number => number ** 0.5)

//(3)
const my_sqrt = number => Math.sqrt(number)
```

- filter - 주어진 함수의 test를 통과하는 모든 요소를 모아서 새로운 배열 반환

```javascript
const numbers = [1, 2, 3, 4, 5]

numbers.filter(number => {
  return number % 2 === 0
})

// [2, 4]
```

```javascript
// Q. fruit만 모아서 새로운 배열 fruits 생성하기

const products = [
  { name: 'cucumber' , type: 'vege' },
  { name: 'banana' , type: 'fruit' },
  { name: 'apple' , type: 'fruit' },
  { name: 'cucumber' , type: 'vege' },
]

const fruits = products.filter(product => {
  return product.type === 'fruit'
})

// 결과
fruits
(2) [{…}, {…}]
0: {name: "banana", type: "fruit"}
1: {name: "apple", type: "fruit"}
length: 2
__proto__: Array(0)
```

### Q. map helper를 사용해서 distance / time (속도)를 저장하는 배열 speeds를 만들자

```javascript

const trips = [
  {distance: 34, time: 10},
  {distance: 90, time: 50},
  {distance: 59, time: 25},
]

/*
const speeds = trips.map( 함수정의 )  => 각 루프마다 실행하고자하는 함수
ex) python이었다면
	for trip in trips(): 에서 trip은
JS에서 map에 첫번째 인자로 주어지는 변수다
*/

const speeds = trips.map(trip => {
  return trip.distance / trip.time
})
```

### Q. filter로 나이가 50이상인 아이템만 가지고 있는 새로운 배열(old ages) 만들기

```javascript
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter(age => {
  return age >= 50
})

const oldAges2 = ages.filter((age, index, self) => {
  return age >= 50
})

(ages를 돌 인자, 인자의 idx, ages 자신이 들어감)
15 0 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
25 1 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
35 2 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
45 3 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
55 4 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
65 5 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
75 6 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
85 7 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]
95 8 (9) [15, 25, 35, 45, 55, 65, 75, 85, 95]

```

- find - 주어진 판별함수를 만족하는 첫번째 요소의 값을 반환, 없다면 undefined반환

```javascript
const users = [
  {name: 'Tony Stark', age: 45},
  {name: 'Steve Rogers', age: 32},
  {name: 'Thor', age: 40},
]

// find
const tony = users.find(user => {
  return user.name === 'Tony Stark'
})
// 결과
tony
{name: "Tony Stark", age: 45}

// filter
const tony = users.filter(user => {
  return user.name === 'Tony Stark'
})

// 결과
tony
[{…}]
0: {name: "Tony Stark", age: 45}
length: 1
__proto__: Array(0)

```

- some  ( or과 비슷 )
  some - 배열 안의 어떤 요소라도 (===가 true인게 하나라도 있으면) 주어진 판별 함수를 통과하는지 test하고 결과에 따라 boolean값을 반환

```javascript
const arr = [1, 2, 3, 4, 5, ]
// 하나라도 짝수가 있다면 true를 반환하는 함수
const result = arr.some(a => {
  return a%2 === 0
})

// 결과  (하나라도 짝수를 포함하고 있나? -> true)
result
true
```

- every (and와 비슷)

```javascript
// 모든 요소가 짝수를 포함하고 있다면 true
const result2 = arr.every(a => {
  return a%2 ===0
})

// 결과
result2
false
```

### Q. requests 배열에서 각 요청들 중 status가 pending인 요청이 있는지 확인하라

```javascript
const requests = [
  {url: '/photos', status: 'complete' },
  {url: '/albums', status: 'pending' },
  {url: '/users', status: 'failed' },
]

const isInProgress = requests.some(request => {
  return request.status === 'pending'
})

// 결과
isInProgress
true
```

### Q. reduce를 사용하여 ssafyTest배열을 doubleSsafyTest로 만드시오

```javascript
const doubleSsafyTest = ssafyTest.reduce((doubleScore ,score) => {
  doubleScore.push(score * 2)
  return doubleScore
}, [])

// 결과
doubleSsafyTest
(4) [180, 198, 156, 160]
```

