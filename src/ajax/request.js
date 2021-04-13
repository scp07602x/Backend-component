import axios from 'axios';
// import router from '@/router';

const Service = axios.create({
  // baseURL: 'http://base.laraveldev.com/',
  baseURL: 'http://172.31.9.88/basedevlaravel8/public',
  timeout: 5000, // 請求超時設置
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
})

// request攔截器
Service.interceptors.request.use(config => {
  let token = localStorage.getItem('token'); // 如果有token每一個請求都加上token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
})

// response攔截器
Service.interceptors.response.use(response => {
  return response;
}, error => {
  errorLog(error);
})

const errorLog = (error) => {
  const {
    response
  } = error;

  if (!response) {
    console.log("api faild");
  } else {
    switch (response.status) {
      default:
        console.log(response.data);
        break;
    }
  }

}

export default Service;