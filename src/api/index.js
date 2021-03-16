import service from '@/api/request';

export default {
  resultProcessing(data) {
    if (data.status == "success") {
      return data.result;
    }
  },

  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      service
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(this.resultProcessing(response.data));
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      service.post(url, data).then(
        response => {
          resolve(this.resultProcessing(response.data));
        },
        err => {
          reject(err);
        }
      );
    });
  },

  delete(url, data = {}) {
    return new Promise((resolve, reject) => {
      service.delete(url, data).then(
        response => {
          resolve(this.resultProcessing(response.data));
        },
        err => {
          reject(err);
        }
      );
    });
  },

  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      service.put(url, data).then(
        response => {
          resolve(this.resultProcessing(response.data));
        },
        err => {
          reject(err);
        }
      );
    });
  },

  patch(url, data = {}) {
    return new Promise((resolve, reject) => {
      service.patch(url, data).then(
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