import { Component } from "react";
import './Child.css'
export default class Child extends Component {

    render(){
        return (
            <div>
                <div className="top">{this.props.top}</div>
                <div className="content">
                <div className="left">{this.props.left}</div>
                <div className="main">{this.props.children}</div>
                <div className="right">{this.props.right}</div>
                </div>
                <div className="bottom">{this.props.bottom}</div>
            </div>
        )
    }
}