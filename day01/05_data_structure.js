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



// object

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



// JSON object

const jsonData = JSON.stringify(me)
// stringify - 문자열로 바꾸라는 뜻
// 직렬화 작업 => JS object를 str으로 바꾼다
jsonData
"{"name":"조뮁","phone number":"010-2222-2222","phoneNumber":"010-1234-5678","appleProducts":{"macbook":"2018pro","iphone":"7"}}"

const parsedData = JSON.parse(jsonData)
// 역직렬화 => string을 JS object로

parsedData
{name: "조뮁", phone number: "010-2222-2222", phoneNumber: "010-1234-5678", appleProducts: {…}}
appleProducts: {macbook: "2018pro", iphone: "7"}
name: "조뮁"
phone number: "010-2222-2222"
phoneNumber: "010-1234-5678"
__proto__: Object


