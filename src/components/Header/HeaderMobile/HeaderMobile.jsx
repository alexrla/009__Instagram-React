import React from 'react';

import Logo from '../../../assets/img/logo.png';

function HeaderMobile(props) {
    return (
        <div className="cabecalho__mobile">
            <ion-icon name="logo-instagram" />
                
            <img src={Logo} alt="Logo" className="cabecalho__logo" />

            <ion-icon name="paper-plane-outline" />
        </div>
    );
}

export default HeaderMobile;