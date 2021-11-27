import MovieThumbnail from "./MovieThumbnail"

const GenreList = ({ movies, genre, onImageClick }) => {
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
                        onImageClick={onImageClick}
                    />
                })}
            </div>
        </div> 
        )
}

export default GenreList