import React from 'react';

import styles from './button.module.scss';

const Button = ({ type = 'button', text, ...rest }) => {
    return (
        <button className={ styles.btn } type={ type } { ...rest }>
            <span>{ text }</span>
        </button>
    );
};

export default Button;