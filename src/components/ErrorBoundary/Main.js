import { Component } from "react";
import { ErrorBoundary } from "./Boundary";
import { ErrorBoundarySub } from "./Sub";

export class ErrorBoundaryMain extends Component {

    render(){
        return (
            <>
                <ErrorBoundary>
                    <ErrorBoundarySub />
                </ErrorBoundary>
            </>
        )
    }
}