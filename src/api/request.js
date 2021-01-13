import axios from 'axios';

const Service = axios.create({
  baseURL: 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=1jwoEGx68VsG',
  timeout: 5000 // 請求超時設置
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