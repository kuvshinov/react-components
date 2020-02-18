import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation, {Link} from '../layout/Navigation';
import Header, {HeaderTitle} from '../layout/Header';
import MainContainer from '../layout/MainContainer';
import ThemeContext from '../context/theme-context';
import Button from '../components/Button';

const links = [
    { to: '/', name: 'Home'},
    { to: '/typography', name: 'Typography'},
    { to: '/components', name: 'Components'},
];

const Layout = ({ children }) => {
    const history = useHistory();
    const [navOpen, setNavOpen] = useState(() => false);

    const navigate = (to) => {
        history.push(to);
        setNavOpen(false);
    };

    const elems = links.map(link =>
        <Link key={ link.to } to={ link.to } active={ link.to === history.location.pathname } onClick={ navigate }>
            { link.name }
        </Link>
    );

    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <>
                    <Header onMenuClick={ () => setNavOpen(true) }>
                        <HeaderTitle>UI Components</HeaderTitle>
                        <Button theme="dark" text={ theme } onClick={ toggleTheme } />
                    </Header>
                    <Navigation open={ navOpen } onOverlayClick={ () => setNavOpen(false) }>
                        { elems }
                    </Navigation>
                    <MainContainer withNav>
                        { children }
                    </MainContainer>
                </>
            )}
        </ThemeContext.Consumer>
    );
};

export default Layout;
