import React from 'react';

import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';

function Header(props) {
    return (
        <header>
            <HeaderDesktop />
            <HeaderMobile />
        </header>
    );
}

export default Header;