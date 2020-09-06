import React from "react";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";
// This return a context object. By convention, we should name this object using Pascal naming convention.
// The same convention we use to name our components.
// => Capitalize the first letter of every word.

export default UserContext;
