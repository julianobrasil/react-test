import {Outlet, useLoaderData} from 'react-router-dom'
import Movies from '../../components/movies'

function MoviesPage() {
  const movies = useLoaderData()
  return <div style={{display: 'flex'}}> 
    <Movies movies={movies} />
    <div>
      <Outlet />
    </div>
  </div>
}

export default MoviesPage
