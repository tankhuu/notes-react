# Note for React Form

## Ref

```
# define in class
username = React.createRef();
# add ref prop in render
<input ref={this.username} />
# Get value in method
this.username.current.value;
```

## Controlled Elements

Apply on the concept Single Source of Truth.
Same as Controlled Components, controlled elements, they don't have their own state, they get all of the data from the props, and they notify changes to data by raising an event. Ex: this.props.onClick()

### Render

```
<input name="username" value={this.state.account.username} onChange={this.handleChange} />
<input name="password" value={this.state.account.password} onChange={this.handleChange} />
```

#### Method

```
handleChange = e => {
  const account = {...this.state.account}
  account[e.currentTarget.name]= e.currentTarget.value;
  this.setState({account})
}
```

Controlled Elements or Components can't receive `null` or `undefined` value as props, in those cases they will be consider as a uncontrolled elements or components (which have their own state).
=> Everytime we use controlled elements or components we should initialize the values of props that we pass into them with `not null` and `not undefined` values

## Validation

```
# in this.state
state = {
  errors: {
    username: 'Username is required.'
  }
}
```

```
# on Submit
handleSubmit = e => {
  e.preventDefault();

  const errors = this.validate();
  this.setState({ errors })
  if (errors) return;  // If there's error, we will return immediately, won't call the server

  // call server
}
```
