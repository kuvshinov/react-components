import React from 'react';

import './button.scss';

const Button = ({ type = 'button', style, text, theme, ...rest }) => {
    let btnStyle = `btn ${ theme ? theme : '' } ${ style ? style : '' }`;

    return (
        <button className={ btnStyle } type={ type } { ...rest }>
            <span>{ text }</span>
        </button>
    );
};

export default Button;