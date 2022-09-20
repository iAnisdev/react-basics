import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {


    render() {
        let top = <h4>This is Top</h4>
        let bottom = <h4>This is Bottom</h4>
        let right = <h4>This is Right</h4>
        let left = <h4>This is Left</h4>
        return (
            <Child top={top} bottom={bottom} right={right} left={left}>
                <h4>This is Main</h4>
            </Child>
        )
    }
}