# Note to create Reusable HTTP service

## Define

```
// file ./services/httpService.js
import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  // this function will be executed every time a response with an error.
  const { reponse } = error;
  const expectedError =
    response && response.status >= 400 && response.status < 500;
  if (!expectedError) {
    // handle unexpected error here
    console.log("Log the error");
    alert("showing User friendly message");
  }

  // return a rejected promise
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
```

## Usage

```
import http from "./services/httpService";

const { data: posts } = await http.get(apiEndpoint);
```
