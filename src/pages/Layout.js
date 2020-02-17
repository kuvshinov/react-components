import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation, {Link} from '../layout/Navigation';
import Header, {HeaderTitle} from '../layout/Header';
import MainContainer from '../layout/MainContainer';

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
        <>
            <Header onMenuClick={ () => setNavOpen(true) }>
                <HeaderTitle>UI Components</HeaderTitle>
            </Header>
            <Navigation open={ navOpen } onOverlayClick={ () => setNavOpen(false) }>
                { elems }
            </Navigation>
            <MainContainer withNav>
                { children }
            </MainContainer>
        </>
    );
};

export default Layout;
