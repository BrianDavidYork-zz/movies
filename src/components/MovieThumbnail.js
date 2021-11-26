const MovieThumbnail = ({ imageAddress, movieId, movieName }) => {
    const click = (id) => {
        console.log(id)
      }

    return (
    <div className='thumbNail'>
        <img 
            className='thumbNailImage'
            src={imageAddress}
            alt=''
            onClick={() => click(movieId)}
      />
      <h4 className='movieName'>{movieName}</h4>
    </div>
    )
}

export default MovieThumbnail