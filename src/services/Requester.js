import axios from 'axios';

class Requester {
  constructor(http) {
    this.http = http;
    this.http.interceptors.response.use((resp) => resp, (reason) => this.statusCodeInterceptor(reason));
    this.listeners = {};
  }

  get(url, config) {
    return this.http.get(url, config);
  }

  useToken(token) {
    this.http.defaults.headers.common['Authorization'] = token;
    return this;
  }

  post(url, data, config) {
    return this.http.post(url, data, config);
  }

  put (url, data, config) {
    return this.http.put(url, data || {}, config);
  }

  delete(url, config) {
    return this.http.delete(url, config);
  }

  onResponseStatus (status, handler) {
    if (!this.listeners[status]) {
      this.listeners[status] = [];
    }

    this.listeners[status].push(handler);
  }

  statusCodeInterceptor (error) {
    if (error.response) {
      if (this.listeners[error.response.status]) {
        this.listeners[error.response.status].forEach(handler => {
          handler(error);
        });
      }
    }
  }
}

const http = axios.create({
  baseURL: 'https://site-indexer-api.herokuapp.com'
  // baseURL: 'http://localhost:3000'
});

http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
http.defaults.headers.common['Content-Type'] = 'application/vnd.api+json';

const requester = new Requester(http);

export default requester;
