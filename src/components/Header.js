const Header = ({ imageAddress }) => {
    return (
    <div className='header'>
        <h1>Wookie Movies</h1>
        <input
            type='text'
            id='header-search'
            placeholder='Search Movies'
        />
        <button type='submit'>Search</button>
    </div>  
    )
}

export default Header