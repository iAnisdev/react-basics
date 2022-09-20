import { Component } from "react";
import Developer from "./Developer";

class List extends Component {
    constructor(){
        super()
        this.state = {
            developers: [
                {
                    name: 'Adam',
                    age: 28,
                    framework: 'Vue'
                },
                {
                    name: 'Brendon',
                    age: 26,
                    framework: 'React'
                },
                {
                    name: 'Charles',
                    age: 31,
                    framework: 'Angular'
                },
                {
                    name: 'Damin',
                    age: 24,
                    framework: 'Svelte'
                }
            ]
        }
    }

    render(){
        const developersList = this.state.developers.map((developer) => <Developer info={developer} key={developer.name} />)

        return (
            <ul>
                {developersList}
            </ul>
        )
    }
}

export default List