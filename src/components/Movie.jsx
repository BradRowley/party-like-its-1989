import React, { Component } from 'react'
export class Movie extends Component {
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
export default Movie
