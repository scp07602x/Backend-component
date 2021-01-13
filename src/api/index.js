import axios from 'axios';
// import Service from '@/api/request';

axios.fetch = (url, params = {}) =>{
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// export function post(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data).then(
//       response => {
//         resolve(response.data);
//       },
//       err => {
//         reject(err);
//       }
//     );
//   });
// }

// export function remove(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.delete(url, data).then(
//       response => {
//         resolve(response.data);
//       },
//       err => {
//         reject(err);
//       }
//     );
//   });
// }

// export function put(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.put(url, data).then(
//       response => {
//         resolve(response.data);
//       },
//       err => {
//         reject(err);
//       }
//     );
//   });
// }
// 將封裝的方法打包起來
// export const UserServer = {
//   fetch: function (paramObj) {
//     return fetch("api/users", paramObj);
//   },
//   post: function (paramObj) {
//     return post("api/users", paramObj);
//   },
//   put: function (paramObj) {
//     return put("api/users", paramObj);
//   },
//   delete: function (paramObj) {
//     return remove("api/users", paramObj);
//   }
// };