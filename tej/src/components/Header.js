import './Header.css';

function Header() {
    return (
        // Homepage | Favorites | Sign In/Sign Out | 
        <div>
            <h1 className='header-txt'>Dgscsby</h1>
            <div className='nav-button-container'>
                <h1 className='navButtons'>Home</h1>
                <h1 className='navButtons'>Favorites</h1>
                <h1 className='navButtons'>Sign In</h1>
            </div>
        </div>
    );
}

export default Header;