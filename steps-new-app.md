# Note the steps for starting a new app

## Installation

```
#!/bin/bash
app_name="new-app"

# Create React App
npx create-react-app $app_name

# Install Prerequisites
cd $app_name
npm install react@16.3.1 react-dom@16.13.1 prop-types@15.7.2
npm install react-router-dom@5.2.0 query-string@6.13.1
npm install react-bootstrap@1.3.0 bootstrap@4.5.2 font-awesome@4.7.0
npm install react-toastify@6.0.8
npm install classnames@2.2.6 lodash@4.17.20 string@3.3.3 validate.js@0.13.1
npm install axios@0.20.0
```

## Configure

### UI: react-bootstrap

`./ui/bootstrap.md`

### Font: Font Awesome

`./ui/font-awesome.md`

### Routing: React Router Dom

`./routing/routing.md`

### Notification: React Toastify

`./errors-notification/notifications.md`

### Logger: Sentry

`./logger/logger-service.md`
