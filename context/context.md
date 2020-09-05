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
