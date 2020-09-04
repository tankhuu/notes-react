# Note for Toast Notification

## Installation

`npm i react-toastify`

## Usage

```
// file App.js
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

render() {
    return (
      <React.Fragment>
        <ToastContainer />
        ...
      </React.Fragment>
    );
  }
```

```
// file httpService.js

import { toast } from "react-toastify";

toast('beautiful message');
toast.error("showing User friendly message");
toast.success("");
toast.info("");
```
