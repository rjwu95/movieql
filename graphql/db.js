import axios from 'axios'

export const getMovies = async (limit, minimumRating) => {
  const { data: { data: { movies } } } = await axios.get(`https://yts.tl/api/v2/list_movies.json?limit=${limit}&minimum_rating=${minimumRating}`)
  return movies
}

export const getMovieDetail = async id => {
  const { data: { data: { movie } } } = await axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${id}`)
  return movie
}

export const getSuggestions = async id => {
  const { data: { data: { movies } } } = await axios.get(`https://yts.am/api/v2/movie_suggestions.json?movie_id=${id}`)
  return movies
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id)
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score
  }
  movies.push(newMovie)
  return newMovie
}
