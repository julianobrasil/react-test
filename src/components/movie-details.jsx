export const MovieDetails = ({people = []}) => {
  return (
    <>
      <h2>List of characters: </h2>
      <ul>
        {(people || []).map(p => (
          <li key={p.url}>{p.name}</li>
        ))}
      </ul>
    </>
  )
}

export default MovieDetails
