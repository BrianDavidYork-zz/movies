import { useEffect, useState} from 'react'
import Detail from './components/Detail'
import GenreList from './components/GenreList'
import Header from './components/Header'

const App = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [movieId, setMovieId] = useState(null)

  useEffect(() => {
    fetchMoviesAndSetState()
  }, [])

  useEffect(() => {
    generateGenresAndSetState()
  }, [movies])

  const fetchMoviesAndSetState = async () =>{
    const res = await fetch('https://wookie.codesubmit.io/movies', {
      headers: {
        'Authorization': 'Bearer Wookie2019'
      }
    })
    const allMovies = await res.json()
    setMovies(allMovies.movies)
  }

  const generateGenresAndSetState = () => {
    const allGenres = []
    
    movies.forEach((m) => {
      m.genres.forEach((g) => {
        if (!allGenres.includes(g)) {
          allGenres.push(g)
        }
      })
    })
    setGenres(allGenres)
  }

  const getMoviesByGenre = (genre) => {
    return movies.filter((m) => {
      return m.genres.includes(genre)
    })
  }

  const getMovieById = () => {
    return movies.filter((m) => {
      return m.id === movieId
    })
  }

  const onImageClick = (id) => {
    setMovieId(id)
    setShowDetail(true)
  }

  const onHeaderClick = () => {
    setMovieId(null)
    setShowDetail(false)
  }

  const renderBody = () => {
    if (showDetail) {
      return <Detail movie={getMovieById()[0]}/>
    } else {
      return genres.map((g) => {
        return <GenreList 
          key={g} 
          movies={getMoviesByGenre(g)} 
          genre={g}
          onImageClick={onImageClick}
          />
      })
    }
  }

  return (
    <div className='App'>
      <Header onHeaderClick={onHeaderClick}/>
      <hr />
      {renderBody()}
    </div>
  )
}

export default App
