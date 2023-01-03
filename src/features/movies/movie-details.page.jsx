import { useLoaderData} from 'react-router-dom'

function MovieDetailsPage() {
  const people = useLoaderData()
  console.log({people})
  return <>Movie Details</>

}

export default MovieDetailsPage

