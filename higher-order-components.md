# Note for Higher Order Components

We use higher order components to reuse logic across components.

## Situation

Imagine we have 3 components, and all of these components, we want to have some kind of tooltip behavior.
So when we hover our mouse over this component, we should see a tooltip, and when we move away from it, tooltip should disappear.

=> To implement this, we should have:

- state call show tooltip
- handle mouse event on hover move over/out, event handlers we need to change state, reset the value of field that show tooltip.
- somewhere in this component, we should conditionally render our tooltip depending on value of the show tooltip flag.

=> Then we have to repeat those logic in 2 other components

So, if there's a bug in our implementation or if you want to change how our tooltip work, we have to change every single component that we implemented this logic again.

=> We use higher order components to solve this problem.

## How

Imagine we have a component which we want to add the tooltip functionality to.
We create a new function and pass this component as an argument to this function.
In this function, we're going to return a new component that wraps our original component.
And this bigger component, we're going to implement all that common functionality such as functionality for showing a tooltip.

Another example, imagine we have multiple components that are fetching data from the backend, whenever we're fetching the data, we wanna show a loader icon.
We can implement that common logic inside this wrapper component, and with this, we no longer have to repeat it across different components.

## Implementation

```
file: ./hoc/withTooltip.jsx

import React from "react";

function withToolTip(Component) {
  return class withToolTip extends React.Component {
    state = {
      showTooltip: false,
    };

    mouseOver = () => this.setState({ showTooltip: true });
    mouseOver = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withToolTip;
```

```
file: ./hoc/Movie.jsx

import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Show some tooltip</div>}
      </div>
    );
  }
}

export default withTooltip(Movie);

```
