import React, { ReactElement } from "react";
import { JsxElement } from "typescript";

type Props = {
    name: string;
}

function displayName(props: Props):ReactElement{
    return (
        <div>
            {props.name}
        </div>
    )
}

export default displayName