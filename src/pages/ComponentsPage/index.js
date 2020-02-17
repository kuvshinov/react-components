import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ComponentsPage = () => {
    return (
        <div>
            <h2>Components</h2>
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
            <h3>Buttons</h3>
            <div>
                <Button text='text button' />
            </div>
        </div>
    );
};

export default ComponentsPage;