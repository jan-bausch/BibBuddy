const baseUrl = process.env.BACKEND_HOST;

export default class API {
   static fetch(endpoint, data = {}) {
      const url = baseUrl + endpoint;
      return fetch(url, data).then(response => response.json());
      //const response = await fetch(url, data);
      //const result = await response.json();
      //return result;
   }
}
