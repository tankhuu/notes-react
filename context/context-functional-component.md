# Note for using context in functional components

We prefer using functional components rather than class components for simplify code and using

`import React, {useContext} from "react";`
=> This useContext declaration only works in functional components

```
import React, { useContext } from "react";
import UserContext from "./userContext";

export default function MovieRow(props) {
  const currentUser = useContext(UserContext);
  return <div>Movie Row: {currentUser.name}</div>;
}
```
