import { Component, Fragment, lazy, Suspense } from "react";
const LoadSub = lazy(() => import('./Sub'))

export default class LoadMain extends Component {
    render() {
        return (
            <Fragment>
                <p>This is Main component</p>
                <Suspense fallback={<div>
                    Loading....
                </div>}>
                    <LoadSub />
                </Suspense>
            </Fragment>
        )
    }
}