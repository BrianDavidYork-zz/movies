const MovieThumbnail = ({ imageAddress, movieId, movieName, onImageClick }) => {
    // const click = (id) => {
    //     console.log(id)
    // }

    return (
    <div className='thumbnail'>
        <img 
            className='thumbnailImage'
            src={imageAddress}
            alt=''
            onClick={() => {onImageClick(movieId)}}
      />
      <h5 className='thumbnailName'>{movieName}</h5>
    </div>
    )
}

export default MovieThumbnail