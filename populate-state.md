# Note for refactoring the state updating

## Original

```
async componentDidMount() {
  const {data: genres} = await getGenres();
  this.setState({genres});

  const movieId = this.props.match.params.id;
  if (movieId === 'new') return;

  try {
    const {data: movie} = await getMovie(movieId);
    this.setState({data: this.mapToViewModel(movie)});

  } catch (err) {
    if (ex.response && ex.response.status === 404)
      this.props.history.replace("/not-found")
  }
}
```

## Reason

There're so much going on this method.
If another developer looks at this code they can't tell quickly what is going on here.
They have to read every line of this method.

We will refactor our code to be so clean and self explanatory like telling a story.

With this method, there're 2 things we do in this method:

- populate the genres
- populate the movie and if we are editing a movie with a valid movie id.

=> We will break this method into 2 methods:

```
async populateGenres() {
  const {data: genres} = await getGenres();
  this.setState({genres});
}
```

```
async populateMovie() {
  try {
    const movieId = this.props.match.params.id;
    if (movieId === 'new') return;
    const {data: movie} = await getMovie(movieId);
    this.setState({data: this.mapToViewModel(movie)});

  } catch (err) {
    if (ex.response && ex.response.status === 404)
      this.props.history.replace("/not-found")
  }
}
```

```
async componentDidMount() {
  await this.populateGenres();

  await this.populateMovie();
}
```
