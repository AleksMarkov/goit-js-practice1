import axios from 'axios';

// axios({
//   url: 'https://fortniteapi.io/v1/challenges',
//   params: {
//     lang: 'en',
//   },
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then(responce => {
//     console.log(responce.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// axios({
//   url: 'https://fortniteapi.io/v1/challenges',
//   params: {
//     lang: 'en',
//   },
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then(responce => {
//     console.log(responce.data);
//   })
//   .catch(function (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }
//     console.log(error.config);
//   });

axios({
  url: 'https://fortniteapi.io/v1/challenges',
  params: {
    lang: 'en',
  },
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(responce => {
    console.log(responce.data);
  })
  .catch(error => {
    console.error(error.toJSON());
  });

asinc function f1() {
  const res = await fetch('https://fortniteapi.io/v1/challenges')
  return res.text();
}
asinc function f2() {
  const res = await fetch('https://fortniteapi.io/v1/challenges')
  return res.text();
}
asinc function f3() {
  const res = await fetch('https://fortniteapi.io/v1/challenges')
  return res.text();
}
asinc go(){
  let a = await f1();
  console.log(a);
  let b = await f2()
  console.log(b);
  let c = await f3()
  console.log(c);
 }

// axios
//   .get('https://fortniteapi.io/v1/challenges', {
//     params: { leng: 'ru', season: 'current' },
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'a72e4011-49fb1cd4-ee1bf19f-3f2ac52f',
//     },
//   })
//   .then(responce => {
//     console.log(responce.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// axios
//   .post('https://jsonplaceholder.typicode.com/posts', {
//     userId: 1,
//     title: 'My title',
//     body: 'My body',
//   })
//   .then(responce => {
//     console.log(responce.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// axios({
//   method: 'POST',
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   data: { userId: 1, title: 'My title', body: 'My body' },
// })
//   .then(responce => {
//     console.log(responce.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
