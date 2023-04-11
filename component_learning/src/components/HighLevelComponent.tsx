import React, { ReactElement } from "react";
import { JsxElement } from "typescript";

import Display from "./Display";

// class HighLevelComponent extends React.Component {
//     render(): React.ReactNode {
//         return (
//             <div>
//                 {this.props.myArray.map((el: string) => (<Display name={el} />))}
//             </div>
//         )
//     }
// }


function HighLevelComponent(props: { myArray: string[]; }):ReactElement<any, any> { 
    return(
    <div>
        <h1>This is Higher order Component</h1>
        <p>Advanced technique in React for reusing component logic. 
            HOCs are functions that return components. They are used to share 
            logic with other components
        </p>
        <strong>You can use to 'Hack' the rule that you can only return one JSX element from a component</strong>
        {props.myArray.map((el: string) => (<Display name={el} />))}
    </div>
)}

export default HighLevelComponent