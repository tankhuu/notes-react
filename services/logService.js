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
