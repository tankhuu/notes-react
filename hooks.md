# Note for React Hooks

## Before React 16.8

Functional (stateless) & Class (stateful)
If we wanna store some state or use lifecycle methods, we have to use class

## React 16.8 and later

We have new feature called `hooks` that allow us to build functional components with all the features we have in class components. So we can use state and lifecycle features of class components.

## Why Hooks

- Classes are a bit difficult for some people to understand.
- This `Class` keyword is confusing in JavaScript.
- Writing Class Component requires boilerplate code.
- Allow create functional components with all of the features of class components => code will be cleaner and shorter.

## Implementation

There is 1 rule to follow: we can't call hooks inside loops, conditions or nested functions.

```
// This implementation will raise a error
  if (count === 0) {
    const [name, setName] = useState("")
  }
```

### useState Hook

```
import React, { useState, Fragment } from "react";

function Counter(props) {
  // useState return 2 items
  // const array = useState(0);
  // The first one is the value of state
  // const count = array[0]; // this.state.count
  // The second one is the function for updating this value
  // const setCount = array[1]; // this.setState()

  // => simplify call
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>{name} {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
```

### useEffect Hook

In class component, lifecycle hooks will have many methods: componentDidMount() | componentDidUpdate() | componentWillUnmount()

In functional component, there's only 1 method called `useEffect(func, [])` that does the job of all above methods

- The first argument is function, It'll take the function and this is where we implement all the logic in a single place.
  This function allow us to hook into our components lifecycle methods, and get called every time our component rendered.
  => this function will be applied in all of the lifecycle methods `componentDidMount()` | `componentDidUpdate()` | `componentWillUnmount()` | ...
- The second argument is array, which will list all of the state variables that are effect hook is dependent upon.
  Ex: if add [count], that means this function gets called only when the value of the count variable changes. So if we change the name, the title of the document is not going to get updated.

```
import React, { useState, Fragment } from "react";

function Counter(props) {
  // useState return 2 items
  // const array = useState(0);
  // The first one is the value of state
  // const count = array[0]; // this.state.count
  // The second one is the function for updating this value
  // const setState = array[1]; // this.setState()

  // => simplify call
  const [count, setState] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // effect
    document.title = `${name} has clicked ${count} times!`;
    return () => {
      // cleanup;
      console.log("cleanup");
    };
  }, []); // putting empty array here => this hook is not going to get called after our component got mounted.
  => if we update the name, count variables, our hook is not going to get called.

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} {count}
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
```

## Custom hooks

Allow create a reusable hook for component to use

```
<!-- file: useDocumentTitle.js -->
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    // effect
    document.title = title;
    return () => {
      // cleanup;
      console.log("cleanup");
    };
  }, []);
}
```

```
<!-- file: Counter.jsx -->
import React, { useState, Fragment } from "react";
import useDocumentTitle from './'

function Counter(props) {
  const [count, setState] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} {count}
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
```

## Fetching Data

```
import React, { useEffect } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  // cause we are using await call with axios, but react doesn't allow we to add async function as
  // the argument for the useEffect hook, function is passed in to hook must be a regular function.
  // => Failed implementation
  // useEffect(async () => {
  //   const result = await axios("https://jsonplaceholder.typicode.com/users");
  //   setUsers(result.data );
  // });
  // => Correct implementation
  useEffect(() => {
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }

    getUsers();
  });
  return <div></div>;
}

export default Users;

```
