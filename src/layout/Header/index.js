import React from 'react';

import styles from './header.module.scss';

export const HeaderTitle = ({ children }) => {
    return (
        <div className={ styles.title }>
            { children }
        </div>
    );
};

const Header = ({ onMenuClick, children }) => {

    return (
        <header>
            { onMenuClick && (
                <div className={ styles.menu } onClick={ onMenuClick }>
                    <i className="material-icons">menu</i>
                </div>
            )}
            { children }
        </header>
    );
};

export default Header;