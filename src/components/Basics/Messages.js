import { Component } from "react";

class Messages extends Component {
    constructor() {
        super()
        this.state = {
            messages: ['Hello', 'Hi There']
        }
    }

    render() {
        const messages = this.state.messages
        return (
            <div>
                {messages.length > 0 &&
                    <h2>You have <b> {messages.length}</b> new messages!</h2>
                }
            </div>
        )
    }
}

export default Messages