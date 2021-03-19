import axios from 'axios';
// import router from '@/router';

const Service = axios.create({
  baseURL: 'http://base.laraveldev.com/',
  timeout: 5000, // 請求超時設置
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
})

// request攔截器
Service.interceptors.request.use(config => {
  let token = localStorage.getItem('token'); // 如果有token每一個請求都加上token;
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
}, error => {
  return Promise.reject(error);
})

// response攔截器
Service.interceptors.response.use(response => {
  return response;
}, error => {
  const {
    response
  } = error;

  if (response == undefined) {
    alert('資料取得錯誤。\r\n請洽資訊部協助辦理。');
  } else {
    errorHandle(response.status, response.data.message);
  }
})

const errorHandle = (status, msg) => {
  switch (status) {
    // case 400:
    //   localStorage.removeItem('token');
    //   router.replace({
    //     path: '/auth/login',
    //   })
    //   break;
    default:
      console.log(status, msg);
  }
}

export default Service;