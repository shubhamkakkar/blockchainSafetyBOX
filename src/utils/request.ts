// @ts-ignore
import { APIUrl } from 'constants';

class Request {
  apiUrl: string;

  token: string = '';

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}

// @ts-ignore
const request = new Request(APIUrl);
export default request;
