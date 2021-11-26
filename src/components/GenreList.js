import MovieThumbnail from "./MovieThumbnail"

const GenreList = ({ movies }) => {
    return (
        <div className='thumbNail'>
            {movies.map((m) => {
            return <MovieThumbnail 
            key={m.id} 
            imageAddress={m.backdrop}
            movieId={m.id}
            movieName={m.title}
            />
            })}
        </div>  
        )
}

export default GenreList