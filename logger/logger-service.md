# Note for Logging Errors

## Use service provider [Sentry](https://sentry.io/welcome/)

- Register
- Create Project
- Framework: React

## Installation

`npm install @sentry/react @sentry/tracing`

## Definition

```
file: index.js

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://e284b5e897c84bc4ac34f2c843973d2c@o442429.ingest.sentry.io/5414183",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

## Usage

```
file: httpService.js

import * as Sentry from "@sentry/react";

axios.interceptors.response.use(null, (error) => {
  // this function will be executed every time a response with an error.
  const { response } = error;
  const expectedError =
    response && response.status >= 400 && response.status < 500;
  if (!expectedError) {
    // handle unexpected error here
    Sentry.captureException(error);
    toast.error("showing User friendly message");
  }

  // return a rejected promise
  return Promise.reject(error);
});
```
