import ShallowRenderer from 'react-test-renderer/shallow'
import MovieThumbnail from '../components/MovieThumbnail'
import Header from '../components/Header'
import Detail from '../components/Detail'
import GenreList from '../components/GenreList'

describe('Movies test Suite', () => {
    const movies = [
        {
            id: '1',
            released_on: '2000-other-date-time-stuff',
            backdrop: 'abc.com',
            slug: 'Great Description',
            title: 'Romantic Film',
            classification: '13+',
            length: '120m',
            director: 'Carl Carlson',
            overview: 'Two people fall in love.'
        },
        {
            id: '2',
            released_on: '2020-other-date-time-stuff',
            backdrop: 'def.com',
            slug: 'Bad Description',
            title: 'Horror Film',
            classification: '17+',
            length: '90m',
            director: 'Sheila Sheilly',
            overview: 'Two people kill each other.'
        }
    ]

    test('MovieThumbnail Component', () => {
        const mock = jest.fn()

        const renderer = new ShallowRenderer()
        renderer.render(<MovieThumbnail 
            imageAddress='abc.com' 
            movieId='2' 
            movieName='Child Film' 
            onImageClick={mock}
            slug='film description'
        />)
        const result = renderer.getRenderOutput()

        const img = result.props.children[0]
        const movieName = result.props.children[1]

        img.props.onClick(result.props.movieId)

        expect(result.type).toBe('div')
        expect(mock).toHaveBeenCalledWith('2')
        expect(movieName.type).toEqual('h5')
        expect(movieName).toEqual(<h5 className="thumbnailName">Child Film</h5>)
    })

    test('Header Component', () => {
        const mock = jest.fn()

        const renderer = new ShallowRenderer()
        renderer.render(<Header onHeaderClick={mock} />)
        const result = renderer.getRenderOutput()

        const logo = result.props.children[0]

        logo.props.onClick()

        expect(result.type).toBe('div')
        expect(mock).toHaveBeenCalled()
    })

    test('Detail Component', () => {
        const movie = movies[0]

        const renderer = new ShallowRenderer()
        renderer.render(<Detail movie={movie}/>)
        const result = renderer.getRenderOutput()

        const img = result.props.children[0]
        const movieText = result.props.children[1]

        expect(result.type).toBe('div')
        expect(img).toEqual(
            <img 
                className='detailImage'
                src='abc.com'
                alt='Great Description'
            />
        )
        expect(movieText.props.children[0].type).toEqual(
            'h2'
        )
        expect(movieText.props.children[1]).toEqual(
            <br />
        )
        expect(movieText.props.children[2]).toEqual(
            <br />
        )
        expect(movieText.props.children[3]).toEqual(
            <br />
        )
        expect(movieText.props.children[4].type).toEqual(
            'h3'
        )
        expect(movieText.props.children[5]).toEqual(
            <br />
        )
        expect(movieText.props.children[6]).toEqual(
            <br />
        )
        expect(movieText.props.children[7]).toEqual(
            <br />
        )
        expect(movieText.props.children[8]).toEqual(
            <h4>Two people fall in love.</h4>
        )
    })

    test('GenreList Component', () => {
        const mock = jest.fn()

        const renderer = new ShallowRenderer()
        renderer.render(<GenreList
            movies={movies}
            genre='Classics'
            onImageClick={mock} 
        />)
        const result = renderer.getRenderOutput()

        const genre = result.props.children[0]
        const moviesDiv = result.props.children[1]
        const movie1 = moviesDiv.props.children[0]
        const movie2 = moviesDiv.props.children[1]
        
        expect(result.type).toBe('div')
        expect(genre).toEqual(<h2>Classics</h2>)
        expect(movie1.type).toEqual(MovieThumbnail)
        expect(movie2.type).toEqual(MovieThumbnail)
    })
})