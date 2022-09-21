import { Component } from "react";

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            errorInfo: null,
            error: null
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log({
            error,
            errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return <p style={{ color: 'red' }}>Something went wrong!</p>
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }

}