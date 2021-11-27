import MovieThumbnail from "./MovieThumbnail"

const GenreList = ({ movies, genre }) => {
    console.log(genre, ": ", movies)
    return (
        <div className='genreList'>
            <h2>{genre}</h2>
            <div>
                {movies.map((m) => {
                    return <MovieThumbnail 
                        key={m.id} 
                        imageAddress={m.backdrop}
                        movieId={m.id}
                        movieName={m.title}
                    />
                })}
            </div>
        </div> 
        )
}

export default GenreList