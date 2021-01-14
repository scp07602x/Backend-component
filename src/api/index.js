import Service from '@/api/request';

export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      Service
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
  },

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      Service.post(url, data).then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      );
    });
  },

  delete(url, data = {}) {
    return new Promise((resolve, reject) => {
      Service.delete(url, data).then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      );
    });
  },

  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      Service.put(url, data).then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}