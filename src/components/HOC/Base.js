const { Component } = require("react");

function UpdateComponent(OriginalComponnet) {

    return class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                counter: 0
            }
            this.updateCounter = this.updateCounter.bind(this)
        }

        updateCounter() {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + 1
                }
            })
        }

        render() {
            return <>
                <OriginalComponnet counter={this.state.counter} updateCounter={this.updateCounter} />
            </>
        }
    }
}


export default UpdateComponent