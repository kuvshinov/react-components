import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout, { MainPage, TypographyPage } from './pages';
import ComponentsPage from './pages/ComponentsPage';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/typography" component={ TypographyPage } exact />
                    <Route path="/components" component={ ComponentsPage } exact />
                    <Route path="/" component={ MainPage } exact />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
