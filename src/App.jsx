import React, { Component } from 'react'
class Movie extends Component {
  render() {
    return (
      <main>
        {this.state.movies.map(movie => (
          <article>
            <h1>{movie.title}</h1>
            <img
              className="pictures"
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            />
            <p>{movie.overview}</p>
          </article>
        ))}
      </main>
    )
  }
}

class App extends Component {
  state = {
    movies: [],
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=b3a81b9a46eb50184516f2b80d2c61a0'
    )
    // console.log(apiData)
    const apiData = await response.json()
    this.setState({ movies: apiData.results })
  }

  render() {
    return (
      <>
        <header>Welcome To the 80's</header>
        <main>
          {this.state.movies.map(movie => (
            <article>
              <h1>{movie.title}</h1>
              <img
                className="pictures"
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              />
              <p>{movie.overview}</p>
            </article>
          ))}
        </main>
      </>
    )
  }
}

export default App
