# Note of the Context in React

## Drop Drilling Problem

Let's say we have the components tree like below:

- ComponentA (currentUser)
  - ComponentB
    - ComponentC (currentUser)

=> If we wanna use `currentUser` in ComponentC we have to pass it to ComponentB, then pass down to ComponentC
=> When the tree grown, this kind of approach will make it unmaintenable
=> This is why REDUX come in.

With Redux, we don't need to drill properties at every level. Instead we have a concept called `Store`, which is an object that stores the global state of our application. That is the data we want to share accross different components.

> In a real application, we can have different types of context.
> So we use the user context to share the current user.
> We can also have the theme context to share the current theme and so on.

## userContext.js

### Definition

```
import React from "react";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";
// This return a context object. By convention, we should name this object using Pascal naming convention.
// The same convention we use to name our components.
// => Capitalize the first letter of every word.

export default UserContext;
```

> Steps to use a Context

- Create context
- Provide context
- Consume context

### Usage

Provide context in App

```
// In App.js

import UserContext from "./context/userContext";

state = {currentUser: {name: "Mosh"}}

render() {
  return (
    <UserContext.Provider value={this.state.currentUser}>
      <div>
        <MoviePage />
      </div>
    </UserContext.Provider>
  );
}
```

Consume context in the component tree

<UserContext.Consumer> component expects a function as a child

=> Wrong definition

```
<UserContext.Consumer>
  <div>
    <MovieList />
  </div>
</UserContext.Consumer>
```

=> Right definition

```
<UserContext.Consumer>
  {userContext => <div>Movie List</div>}
</UserContext.Consumer>
```

```
// In MovieList.jsx

import UserContext from './userContext';

render() {
  return (
    <UserContext.Consumer>
      {userContext => <div>Movie List {userContext.name}</div>}
    </UserContext.Consumer>
  );
}
```

> Consume context outside of the of the render() method like componentDidMount() or others.

After creating the class, we create the a static properties of Class as contextType, then use it

```
class MovieList extends Component {

  componentDidMount() {
    console.log('context', this.context);
  }

  render() {
    // ...
  }
}

MovieList.contextType = UserContext;
```

> Or

```
class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log('context', this.context);
  }

  render() {
    // ...
  }
}
```
