import {Link} from 'react-router-dom'

function Movies({movies = []}) {
  // console.log(movies)
  return (
    <div className='list-group'>
      {movies?.results?.map(m => {
        return (
          <Link
            key={m.episode_id}
            className='list-group-item list-group-item-action'
            to={`/movies/${m.episode_id}`}
          >
            {m.title}
          </Link>
        )
      })}
    </div>
  )
}

export default Movies
