import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout, { MainPage, TypographyPage } from './pages';
import ComponentsPage from './pages/ComponentsPage';
import ThemeContext from './context/theme-context';

const App = () => {
    const [theme, setTheme] = useState(() => 'light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.className = 'dark';
        } else {
            setTheme('light');
            document.body.className = '';
        }
    };

    return (
        <ThemeContext.Provider value={ {theme, toggleTheme }}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/typography" component={ TypographyPage } exact />
                        <Route path="/components" component={ ComponentsPage } exact />
                        <Route path="/" component={ MainPage } exact />
                    </Switch>
                </Layout>
            </Router>
        </ThemeContext.Provider>
    );
};

export default App;
