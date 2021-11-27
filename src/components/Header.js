const Header = ({ onHeaderClick }) => {
    return (
    <div className='header'>
        <h1 className='headerTitle' onClick={() => {onHeaderClick()}}>Wookie Movies</h1>
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