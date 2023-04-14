import React, { useState } from 'react'

import Useeffect from './Useeffect'
import Useref from './Useref'
type Props = {
    topic: string
}

function Hooks(props: Props) {
    const [state, setState] = useState(1)
    const [theme, setTheme] = useState('Blue')

    function display(value: number) {
    }
    function increase() {
        setState(prevState => prevState + 1)
        setTheme('red')
    }
    function decrease() {
        setTheme('Blue')
        display(state)
        setState(prevState => prevState - 1)
    }

    //console.log(state);
    return (
        <div>
            <h1>
                {props.topic}
            </h1>
            <p>
                Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
            </p>
            <h2>useState</h2>
            <button onClick={() => decrease()}>-</button>
            <span>{state}</span>
            <span>{theme}</span>
            <button onClick={() => increase()}>+</button>
            <hr />
            <Useeffect />
            <hr />
            <Useref />
        </div>
    )
}

export default Hooks