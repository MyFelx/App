import React from "react";
import ExpandingDivider from "../UI/ExpandingDivider";
import NavBar from "../UI/NavBar";
import API from "../API/API";

class Home extends React.Component {
  state = {
    user: undefined,
  };
  async componentWillMount() {
    const isLoggedIn = await API.isLoggedIn();
    if (isLoggedIn) {
      if (!this.state.user) {
        this.setState({ user: JSON.parse(localStorage.getItem("user")) });
      }
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        <NavBar
          showLogOutButton={true}
          username={this.state.user?.username}
          showMyListIcon={true}
          showSearchBar={true}
        ></NavBar>
        <ExpandingDivider
          lineColor={"#606060"}
          titleColor={"#dbdbdb"}
          fontSize={21}
          title={"Movies"}
        >
          <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
            Hello
          </div>
          <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
            Hello
          </div>
        </ExpandingDivider>
      </div>
    );
  }
}

export default Home;
