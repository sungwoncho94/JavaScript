// 브라우저한테 명령해서 이름을 받도록 할 것

const username = prompt('안녕하세요. 누구세요?')

if (username === 'saffy') {
  message = '<h1>싸피야 안녕?</h1>'
} else if (username === 'admin') {
  message = '<h1>주인님, 안녕하세요?</h1>'
} else {
  message = `${username}, 넌 싸피가 아니야!`
}

// document.write(message)

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

예시
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