# React Component Lifecycle

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. 

This three phases are: 
- Mounting: 
    * Mounting means putting elements into DOM

    React has four built-in methods that get called when the component is mounted
    1. Constructor()
    2. getDerivedStateFromProps()
    3. render()
    4. componentdidMount()

    >**Note:** Render method is required and all other methods are optional.

- Updating

    * A component is updated whenever there is a change in the component's state or props.

    React has five built-in methods that gets called, in this order, when a component is updated:
    1. getDerivedStateFromProps()
    2. shouldComponentUpdate()
    3. render()
    4. getSnapshotBeforeUpdate()
    5. componentDidUpdate()

- unmounting:
    * The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

    React has only one built-in method that gets called when a component is unmounted:

    1. componentWillUnmount()