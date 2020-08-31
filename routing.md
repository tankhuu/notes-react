# Note for Routing with react-router-dom

## Installation

`npm install react-router-dom query-string`

## BrowserRouter Component

Allow to pass browser history into components tree

```
# In index.js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

## Route & Switch Components

Switch Component render components of path from the most specific one to the most generic one

```
# In App.js
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}
```

## Link & NavLink Component

If we don't use Link component, for everytime we change the route, React will call 2 requests to server for getting html page and bundle.js (all js scripts of our app).
To avoid this, we use Link & NavLink Component in NavBar

```
const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};
```

## Passing props into Component

`<Route path="/products" component={Products} />`

If we wanna add props into Products Component, in Route component we should use render prop instead of component prop

`<Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />`

## Route parameters

```
<Route path="/products/:id" component={ProductDetails} />
<Route
  path="/products"
  render={(props) => <Products sortBy="newest" {...props} />}
/>
<Route path="/posts/:year/:month" component={Posts} />
```

## Route parameters optional

use '?' for marking this parameter is optional

`<Route path="/posts/:year?/:month" component={Posts} />`

## Route QueryString parameters

```
import queryString from "query-string";

queryString.parse(props.location.search)
```

## History push & replace methods

Push help to go to the path that we want

`props.history.push('/products')`

Replace method is used in case such as login pages, after login, and go to a new page, if they click the back button you don't want to take them back to the login page.

`props.history.replace('/home')`

## Nested Routing
