import { useEffect, useState} from 'react'
import GenreList from './components/GenreList'
import Header from './components/Header'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMoviesAndSetState()
  })

  const fetchMoviesAndSetState = async () =>{
    const res = await fetch('https://wookie.codesubmit.io/movies', {
      headers: {
        'Authorization': 'Bearer Wookie2019'
      }
    })
    const allMovies = await res.json()
    setMovies(allMovies.movies)
  }

  // crategorize by genre

  return (
    <div className="App">
      <Header />
      <GenreList movies={movies} />
    </div>
  )
}

export default App
