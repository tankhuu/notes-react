# Note for Logging Errors

## Use service provider [Sentry](https://sentry.io/welcome/)

- Register
- Create Project
- Framework: React

## Installation

`npm install @sentry/react @sentry/tracing`

## Definition

```
file: ./services/logService.js

// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
// import * as Sentry from "@sentry/react";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://e284b5e897c84bc4ac34f2c843973d2c@o442429.ingest.sentry.io/5414183",
  //   integrations: [new Integrations.BrowserTracing()],
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  console.log(error);
  // Sentry.captureException(error);
}

export default { init, log };

```

## Usage

```
file: httpService.js

import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  // this function will be executed every time a response with an error.
  const { response } = error;
  const expectedError =
    response && response.status >= 400 && response.status < 500;
  if (!expectedError) {
    // handle unexpected error here
    logger.log(error);
    toast.error("showing User friendly message");
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
