# Note for handling Errors

## Expected Errors

Errors that are apiEndpoint predict and return.

- Client Errors: 4xx HTTP Code

Example:

- If we try to delete non-exists post, api will return 404 (not-found) error.
- Or bad request 400 when we try to submit a form with invalid data. => validation failed on the server side then server will return a 400 code.
- ...

### How to handle

Display a specific message to users:

- This post is not found, or this post is already deleted.
- show users which field that is failed in validation.
- ...

## UnExpected Errors

Errors that technically shouldn't happen under normal circumstances.

Examples:

- Network is down, we won't able to call the server.
- Server is down
- Database is down
- Bug in application code

### How to handle

- Log the error for future tracing.
- Display a generic and friendly error message to user.

```
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(`${apiEndpoint}/${post.id}`);
    } catch (err) {
      // If an exception is catched, we will received 2 objects
      // err.request
      // err.response
      //   if expected error, the err.response will be truthy otherwise for
      //   unexpected errors, it will be falsy
      //   we can get the error code from err.response.status)
      if (err.response && err.response.status === 404)
        alert("Something failed while deleting  a post");
      else {
        // log the error
        console.log("Logging the error", err);
        alert("An unexpected error occurred.");
      }

      this.setState({ posts: originalPosts });
    }
  };
```

## Handle Unexpected Errors Globally

Use interceptor in axios to intercept our requests and responses and if we have a response with unexpected error we can handle that error in 1 place.

- Log that error
- Display a friendly generic message to the users.

```
axios.interceptors.response.use(success_func, error_func);
// handle just error
axios.interceptors.response.use(null, error => {
  // this function will be executed every time a response with an error.
  const {reponse} = error;
  const expectedError = response && response.status >= 400 && response.status < 500;
  if (!expectedError) {
    // handle unexpected error here
    console.log('Log the error')
    alert('showing User friendly message')
  }

  // return a rejected promise
  return Promise.reject(error);
})
```

Intercepter will be called before the response go to the catch block

try cach block is only needed when you need to do something specific only as a result of this failure.
Otherwise leave the handling of unexpected errors to the interceptor.
