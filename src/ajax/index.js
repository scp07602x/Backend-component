import service from '@/ajax/request';

export default {
  resultData(response) {
    if (response) {
      return response.data.result;
    }
  },

  get(url, data = {}, config = {}) {
    return new Promise((resolve) => {
      service
        .get(url, data, config)
        .then(response => {
          resolve(this.resultData(response));
        });
    });
  },

  post(url, data = {}, config = {}) {
    return new Promise((resolve) => {
      service.post(url, data, config).then(
        response => {
          resolve(this.resultData(response));
        });
    });
  },

  delete(url, data = {}, config = {}) {
    return new Promise((resolve) => {
      service.delete(url, data, config).then(
        response => {
          resolve(this.resultData(response));
        });
    });
  },

  put(url, data = {}, config = {}) {
    return new Promise((resolve) => {
      service.put(url, data, config).then(
        response => {
          resolve(this.resultData(response));
        });
    });
  },

  patch(url, data = {}, config = {}) {
    console.log(url, data, config)
    return new Promise((resolve) => {
      service.patch(url, data, config).then(
        response => {
          resolve(this.resultData(response));
        });
    });
  }
}