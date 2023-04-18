import React, { useEffect, useRef, useState } from "react";

export default function Useref() {
    const [name, setName] = useState('');
    const screenRender = useRef(1)
    const refVal = useRef<HTMLInputElement>(null);

    useEffect(() => {
        screenRender.current = screenRender.current + 1
    }, [name])

    function focus() {
        refVal.current?.focus()
    }

    const inputElement = useRef(<input></input>);

    const focusInput = () => {
    };

    return (
        <>
            <h1>useRef</h1>
            <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
            <p>Use 1 </p>
            <input type="text" onChange={e => setName(e.target.value)} />
            <p>{`You typed ${name}`}</p>
            <p>{`Screen rendered ${screenRender.current} times`}</p>

            <p>Use 2 </p>
            <input ref={refVal} type="text" onChange={e => setName(e.target.value)} />
            <p>{`You typed ${name}`}</p>
            <button onClick={focus}>Focus</button>

            <hr />
            <input type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </>


    )

    

    return (
        <>
            
        </>
    );
}