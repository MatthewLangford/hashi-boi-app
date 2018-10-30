import React from 'react';
import './Header.css';

const Header = props => {
    return <div className='title'>
            <h1>{ props.header }</h1>
            <span>Total Hashrate: {0} </span><span>Total Shares Accepted: { 0 } </span><span>Shares Accepted Percentage : {0}% </span>
        </div>
}

export default Header;