import { Component } from "react";
import PreventRenderingSub from "./Sub";
class PreventRenderingMain extends Component {
    constructor(){
        super()
        this.state = {
            shouldRender: true
        }
    }

    render () {
        let shouldRender = this.state.shouldRender
        if(!shouldRender){
            return null
        }else{
            return (
                <PreventRenderingSub status={shouldRender}/>
            )
        }
    }
}

export default PreventRenderingMain