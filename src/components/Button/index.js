import React from 'react';

import styles from './button.module.scss';

const Button = ({ type = 'button', style, text, ...rest }) => {
    let btnStyle = styles.btn;
    if (style) {
        btnStyle += ' ' + styles[style];
    }

    return (
        <button className={ btnStyle } type={ type } { ...rest }>
            <span>{ text }</span>
        </button>
    );
};

export default Button;