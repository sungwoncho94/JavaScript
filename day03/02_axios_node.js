const axios = require('axios')

// 요청을 보낸 후 response객체에 담기 (request와 사용법이 비슷)
// const response = axios.get('https://jsonplaceholder.typicode.com/posts/1')

// console.log(response)

// 비동기적으로 작동하기 때문에, 아직 응답을 다 받지 못함에도 Promise { <pending> } 라는 응답이 옴

const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url)
  .then(function(response) {
  console.log(response.data)
}) 
// 우리가 원하는 응답을 받음
/*
 data: {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
}
*/




