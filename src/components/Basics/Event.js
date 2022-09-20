import { Component} from "react";

class Event extends Component {
    clickMe(){
        console.log("Clicked!")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click me</button>
            </div>
        )
    }

}

export default Event