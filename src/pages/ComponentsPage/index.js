import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './components.module.scss';

const ComponentsPage = () => {
    return (
        <div>
            <h2>Components</h2>
            <article>
                <h3>Forms</h3>
                <div>
                    <Input id="text1" label="Input text" />
                </div>
                <div>
                    <Input id="pwd2" label="Password" />
                </div>
                <div>
                    <Input id="helper" label="Text with helper" helper="Try to input something" />
                </div>
                <div>
                    <Input id="error" label="Input" value="Invalid text" error="Here is an error" />
                </div>
            </article>
            <article>
                <h3>Buttons</h3>
                <div className={ styles.btnArea }>
                    <Button text="text button" />
                    <Button text="Outlined" style="outlined" />
                    <Button text="Filled" style="filled" />
                </div>
            </article>
        </div>
    );
};

export default ComponentsPage;