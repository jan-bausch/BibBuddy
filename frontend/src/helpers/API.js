const baseUrl = process.env.BACKEND_HOST;

export default class API {
   static fetch(endpoint, data = {}) {
      const url = baseUrl + endpoint;
      return fetch(url, data).then(response => {
         const contentType = response.headers.get("content-type");
         if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json()
         } else {
            return response.text()
         }
      });
   }
}
