export default class Api {
  static headers() {
    return {
      "cache-control": "no-cache",
      "content-type": "application/json"
    };
  }

  static get(route, token) {
    return this.request(route, token, null, "GET");
  }

  static put(route, token, params) {
    return this.request(route, token, params, "PUT");
  }

  static post(route, token, params) {
    return this.request(route, token, params, "POST");
  }

  static delete(route, token, params) {
    return this.request(route, token, params, "DELETE");
  }

  static request(url, token, params, verb) {
    var formData = new FormData();

    for (var name in params) {
      formData.append(name, params[name]);
    }
    let options = Object.assign(
      { method: verb },
      params ? { body: formData } : null
    );
    options.headers = { ...Api.headers(), token };
    return fetch(url, options)
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => {
        console.error(error);
      });
  }
}
