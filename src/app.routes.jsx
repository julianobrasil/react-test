import {createBrowserRouter, redirect} from 'react-router-dom'
import App from './App'
import MovieDetailsPage from './features/movies/movies.page'
import MoviesPage from './features/movies/movies.page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: async ({request}) => {
      if (request.url.endsWith(':3000/')) {
        return redirect('/movies')
      }
      return null
    },
    children: [
      {
        path: 'movies',
        loader: async () => fetch('https://swapi.dev/api/films'),
        element: <MoviesPage />,
        children: [
          {
            path: ':episodeId',
            loader: async ({params}) => {
              // const {episodeId} = params

              // const movieDetails = await fetch(
              //   `https://swapi.dev/api/films/${episodeId}`
              // ).then(res => res.json())

              // const {characters} = movieDetails

              // const people = await Promise.all(
              //   characters.map(c => fetch(c).then(r => r.json()))
              // )

              return []
            },
            element: <MovieDetailsPage />,
          },
        ],
      },
    ],
  },
])
