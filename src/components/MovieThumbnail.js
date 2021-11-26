const MovieThumbnail = ({ imageAddress, movieId, movieName }) => {
    const click = (id) => {
        console.log(id)
    }

    return (
    <div className='thumbnail'>
        <img 
            className='thumbnailImage'
            src={imageAddress}
            alt=''
            onClick={() => click(movieId)}
      />
      <h5 className='thumbnailName'>{movieName}</h5>
    </div>
    )
}

export default MovieThumbnail