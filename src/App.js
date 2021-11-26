import { useEffect, useState} from 'react'
import GenreList from './components/GenreList'
import Header from './components/Header'

const App = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetchMoviesAndSetState();
  }, []);

  useEffect(() => {
    generateGenresAndSetState();
  }, [movies])

  const fetchMoviesAndSetState = async () =>{
    const res = await fetch('https://wookie.codesubmit.io/movies', {
      headers: {
        'Authorization': 'Bearer Wookie2019'
      }
    })
    const allMovies = await res.json()
    setMovies(allMovies.movies)
    console.log(movies)
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
    console.log(genres)
  }

  const moviesByGenre = (movies, genre) => {
    return movies.filter((m) => {
      return m.genres.includes(genre)
    })
  }

  return (
    <div className="App">
      <Header />
      {genres.map((g) => {
        return <GenreList key={g} movies={moviesByGenre(movies, g)} genre={g}/>
      })}
    </div>
  )
}

export default App
