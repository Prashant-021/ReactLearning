import React from "react";

class ClassComponent extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <h1>This is Class component</h1>
                <p>
                    They can do everything a functional component does, but more. Also called <strong>smart components</strong>.
                    they can receive props, have state and lifecycle methods. We use and connect all functional. Here, in our smart components.
                </p>
                <strong>Not everyone is a king. Use as less as possible</strong>
            </div>
        )
    }
}

export default ClassComponent;