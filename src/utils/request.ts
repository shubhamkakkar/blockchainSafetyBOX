class Request {
  apiUrl: string;

  token: string = '';

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}

const request = new Request('http://127.0.0.1:4001');
export default request;
