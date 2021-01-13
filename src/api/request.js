import axios from 'axios';

const Service = axios.create({
  baseURL: 'http://localhost/laravel/public',
  timeout: 5000, // 請求超時設置
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*',
})

// request攔截器
Service.interceptors.request.use(config => {
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

  if (response) {
    errorHandle(response.ststus, response.data.error);
    return Promise.reject(error);
  } else {
    return Promise.reject(error);
  }
})

const errorHandle = (status, msg) => {
  switch (status) {
    case 400:
      console.log(msg);
      break;
    case 401:
      console.log(msg);
      break;
    default:
  }
}

export default Service;