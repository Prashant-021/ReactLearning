import React, { PureComponent } from 'react';

interface Props {
    text: string;
}

class PureComp extends PureComponent<Props> {
    render() {
        return (
            <div>
                <h1>This is {this.props.text} component </h1>
                <p>This is generally used for optmizing the application. The 
                    pure components are also used for increasing performance as 
                    it works like <em>shouldComponentUpdate()</em> lifecycle method 
                    which will reduce the number of operations in the application.
                </p>
                <strong>Essential component type which I suggest using basically when building larger app.</strong>
            </div>
        )
    }
}

export default PureComp