import React from 'react';

import './navigation.scss';

export const Link = ({ to, onClick, children, active }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onClick(to);
    };

    const className = `link ${ active ? 'active' : ''}`;

    return (
        <li>
            <a href={ to } className={ className } onClick={ handleClick }>{ children }</a>
        </li>
    );
};

const Navigation = ({ open, children, onOverlayClick }) => {
    const classes = `slide ${open ? 'open' : ''}`;

    return (
        <aside className={ classes }>
            <div className={ 'overlay' } onClick={ onOverlayClick }/>
            <nav className="nav">
                <ul>
                    { children }
                </ul>
            </nav>
        </aside>
    );
};

export default Navigation;