import { getMovies, getMovieDetail, addMovie, deleteMovie, getSuggestions } from './db'

const resolvers = {
  Query: {
    movies: (_, { limit, minimumRating }) => getMovies(limit, minimumRating),
    movie: (_, { id }) => getMovieDetail(id),
    suggestions: (_, { id }) => getSuggestions(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
}

export default resolvers
