import axios from "axios";

class API {
  static signUp(name, email, password) {
    return axios
      .post("http://localhost:5000/myFlex/api/v1/signgup", {
        name,
        email,
        password,
      })
      .then((response) => {
        // handle success
        // console.log(response);
        localStorage.setItem("token", response.data.token);
      });
  }

  static isLoggedIn() {
    return axios
      .post("http://localhost:5000/profile", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  static logout() {
    return axios
      .post("http://localhost:5000/logout", {
        token: localStorage.getItem("token"),
      })
      .then(() => {
        localStorage.removeItem("token");
        console.log("LoggedOut");
      });
  }

  static login(email, password, error) {
    return axios
      .post("http://localhost:5000/myFlex/api/v1/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("loggedIn");
      })
      .catch((e) => {
        return () => error;
      });
  }
}

export default API;
