import React, { useEffect, useState } from 'react'
interface ListItem {
    id: number;
    // other properties
  }
  
  function Useeffect() {
    const [resourceType, setResource] = useState('Posts');
    const [items, setItems] = useState<ListItem[]>([]); // explicitly define the type of the items array
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((res) => setItems(res));
    }, [resourceType]);
    return (
      <>
        <h2>useEffect</h2>
        <button onClick={() => setResource('Posts')}>Posts</button>
        <button onClick={() => setResource('Users')}>Users</button>
        <button onClick={() => setResource('Comments')}>Comments</button>
        <h1>{resourceType}</h1>
        <div className="listDisplay">
          {items.map((item) => {
            return <pre key={item.id}>{JSON.stringify(item)}</pre>;
          })}
        </div>
      </>
    );
  }
  export default Useeffect;
  