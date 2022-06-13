import React from 'react';

import Logo from '../../../assets/img/logo.png';

function SectionOne(props) {
    return (
        <div className="cabecalho__secao_1">
            <ion-icon name="logo-instagram" />

            <div className="cabecalho__barraVertical"></div>

            <img src={Logo} alt="Logo" className="cabecalho__logo" />
        </div>
    );
}

export default SectionOne;