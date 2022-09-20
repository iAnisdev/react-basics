import { Component } from "react";
import GuestGreeting from "./Greetings/GuestGreetings";
import UserGreeting from "./Greetings/UserGreetings";


class Conditional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.toggleAuth = this.toggleAuth.bind(this)
    }

    toggleAuth ()  {
        this.setState((state) => {
            return {
                isLoggedIn: !state.isLoggedIn
            }
        })
    }
    render() {
        let greeting ,  button
        let isLoggedIn = this.state.isLoggedIn
        if (isLoggedIn) {
            greeting = <UserGreeting />
            button= <button onClick={this.toggleAuth}>Logout</button>
        } else {
            greeting = <GuestGreeting />
            button= <button onClick={this.toggleAuth}>Login</button>
        }

        return (
            <div>
                {greeting}
                {button}
            </div>
        )
    }

}

export default Conditional