import React from 'react';
import API from "./API"

class Test extends React.Component {
    state = {
        email: "mark@gmail.com",
        password: "123465",
        loggedin: "false"
    }

    async isLoggedIn() {
        const isLoggedIn = await API.isLoggedIn()
        console.log(isLoggedIn)
        // this.setState({ loggedin: isLoggedIn.toString() }, () => {


    }
    render() {

        return (
            <div >
                <h1>loggedIn Status is: {this.state.loggedin}</h1>
                <p>Enter your email:</p>
                <input
                    type="email"
                    defaultValue="mark@gmail.com"
                    onChange={(event) => this.setState({ email: event.target.value })}
                />
                <p>Enter your password:</p>
                <input
                    type="password"
                    defaultValue="123465"
                    onChange={(event) => this.setState({ password: event.target.value })}
                />
                <button onClick={() => API.signUp(this.state.email, this.state.password)} > Submit </button>
                <button onClick={() => this.isLoggedIn()} >isLoggedIn</button>
                <button onClick={() => API.logout()}>logout</button>
                <button onClick={() => API.login(this.state.email, this.state.password)}>login</button>
            </div>
        );
    }
}

export default Test;
