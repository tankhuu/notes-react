# Note for React Lifecycle Hooks

## Mounting Phase

### constructor()

It's good to set initial value of this.state = this.props

### render()

### componentDidMount()

It's good to use ajax call or backend call for getting data from backend, set state by value received, this.setState({})

## Updating Phase

Happens when the state or props changes

### render()

### componentDidUpdate(prevProps, prevState)

It can do compare current state with old state, or current props with old props. It's change to get update data from backend by ajax call (optional)

## UnMounting Phase

### componentWillUnmount():

It's chance to do any kind of cleanup, like if we have timers or listeners we can clean those up before this component removed to avoid memory leaks.
