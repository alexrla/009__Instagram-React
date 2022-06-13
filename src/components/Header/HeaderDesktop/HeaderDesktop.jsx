import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

function HeaderDesktop(props) {
    return (
        <div className="cabecalho">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    );
}

export default HeaderDesktop;