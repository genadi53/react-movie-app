import React from 'react'
import './header.scss';

const Header = () => {
    return (
     <span className='header' onClick={ () => window.scroll(0,0) }>
        🎬 React Movie App 🎥
     </span>
    );
}

export default Header;
