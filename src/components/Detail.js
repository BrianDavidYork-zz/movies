const Detail = ({ movie }) => {
    console.log(movie)
    const releaseYear = movie.released_on.slice(0,4)
    return (
    <div className='detail'>
        <img 
        className='detailImage'
        src={movie.backdrop}
        alt={movie.slug}
         />
         <div className='detailText'>
            <h2>{movie.title}    ({movie.classification})</h2>
            <br />
            <br />
            <br />
            <h3>{releaseYear}    |    {movie.length}    |    {movie.director}</h3>
            <br />
            <br />
            <br />
            <h4>{movie.overview}</h4>
         </div>
    </div>  
    )
}

export default Detail