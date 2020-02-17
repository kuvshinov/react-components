import React from 'react';

import styles from './main.module.scss';

const MainContainer = ({ withNav, children }) => {
    return (
        <main className={ withNav ? styles.withNav : ''}>
            { children }
        </main>
    );
};

export default MainContainer;