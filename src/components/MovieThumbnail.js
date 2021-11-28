const MovieThumbnail = ({ imageAddress, movieId, movieName, onImageClick, slug }) => {
    return (
    <div className='thumbnail'>
        <img 
            className='thumbnailImage'
            src={imageAddress}
            alt={slug}
            onClick={() => {onImageClick(movieId)}}
      />
      <h5 className='thumbnailName'>{movieName}</h5>
    </div>
    )
}

export default MovieThumbnail