# Note for update context

```
// App.js
import React, { Component } from "react";

export default class App extends Component {
  handleLoggedIn = (username) => {
    console.log("username is", username);
    const user = { name: "Mosh" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

// login.jsx
import React, { useContext } from "react";

export default function Login(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={() => userContext.onLoggedIn("username")}></button>
    </div>
  );
}
```
