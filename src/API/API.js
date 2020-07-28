import axios from "axios";

class API {
  static signUp(username, email, password, onSuccess, onFail) {
    return axios
      .post("http://localhost:5000/myFlex/api/v1/signgup", {
        username: username,
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        onSuccess(res);
      })
      .catch((e) => {
        console.log(e);
        onFail(e.response.data);
      });
  }

  static isLoggedIn() {
    return axios
      .get("http://localhost:5000/myFlex/api/v1/user", {
        headers: { Authorization: localStorage.getItem("token") },
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
      .post("http://localhost:5000/myFlex/api/v1/logout", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .finally(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("LoggedOut");
      });
  }

  static login(loginValue, password, onSuccess, onFail) {
    return axios
      .post("http://localhost:5000/myFlex/api/v1/login", {
        loginValue,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        onSuccess(res);
      })
      .catch((e) => {
        onFail(e.response.data);
      });
  }

  static search(searchValue) {
    return (
      axios
        .get(
          `http://localhost:5000/myFlex/api/v1/search/movie?searchQuery=${searchValue}`,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        )
        // .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
    );
  }

  static movieDetails(movieID) {
    return (
      axios
        .get(`http://localhost:5000/myFlex/api/v1/movie?searchQuery=${movieID}`)
        // .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
    );
  }

  static addMovieToMyList(id) {
    return axios.patch(
      "http://localhost:5000/myFlex/api/v1/user/list",
      {
        id,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  static removeMovieFromMyList(id) {
    return axios.delete("http://localhost:5000/myFlex/api/v1/user/list", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: {
        id,
      },
    });
  }

  static watched(id, watched) {
    return axios.patch(
      "http://localhost:5000/myFlex/api/v1/user/list",
      { id, watched },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
  }
}

export default API;
