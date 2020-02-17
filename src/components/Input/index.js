import React from 'react';

import styles from './input.module.scss';

const Input = ({ label, id, helper, error, ...props }) => {
    return (
        <div className={ styles.input }>
            <input id={ id } className={error ? styles.error : ''} { ...props } required />
            <div className={ styles.underline } />
            <label htmlFor={ id }>{ label }</label>
            <p className={ styles.helper }>{ error ? error : helper }</p>
        </div>
    );
};

export default Input;