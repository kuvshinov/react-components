import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './components.module.scss';
import ThemeContext from '../../context/theme-context';

const ComponentsPage = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div>
                    <h2>Components</h2>
                    <article>
                        <h3>Forms</h3>
                        <div>
                            <Input id="text1" label="Input text" />
                        </div>
                        <div>
                            <Input id="pwd2" label="Password" type="password" />
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
                            <Button text="text button" theme={ theme } />
                            <Button text="Outlined" theme={ theme } style="outlined" />
                            <Button text="Filled" theme={ theme } style="filled" />
                        </div>
                    </article>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default ComponentsPage;