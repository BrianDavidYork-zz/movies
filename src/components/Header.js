const Header = ({ imageAddress }) => {
    return (
    <div className='header'>
        <h1 className='headerTitle'>Wookie Movies</h1>
        <div className='headerSearch'>
            <input
                type='text'
                placeholder='Search Movies'
            />
            <button type='submit'>Search</button>
        </div>
    </div>  
    )
}

export default Header