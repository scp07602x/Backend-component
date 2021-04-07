import service from '@/ajax/request';

export default {
  resultProcessing(data) {
    if (data.status == "success") {
      return data.result;
    }
  },

  get(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      service
        .get(url, data, config)
        .then(response => {
          resolve(this.resultProcessing(response.data));
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  post(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      service.post(url, data, config).then(
        response => {
          resolve(this.resultProcessing(response.data));
        },
        err => {
          reject(err);
        }
      );
    });
  },

  delete(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      service.delete(url, data, config).then(
        response => {
          resolve(this.resultProcessing(response.data));
        },
        err => {
          reject(err);
        }
      );
    });
  },

  put(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      service.put(url, data, config).then(
        response => {
          resolve(this.resultProcessing(response.data));
        },
        err => {
          reject(err);
        }
      );
    });
  },

  patch(url, data = {}, config = {}) {
    console.log(url, data, config)
    return new Promise((resolve, reject) => {
      service.patch(url, data, config).then(
        response => {
          resolve(this.resultProcessing(response.data));
        },
        err => {
          reject(err);
        }
      );
    });
  }
}