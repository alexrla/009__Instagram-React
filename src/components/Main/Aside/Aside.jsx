import React from 'react';

import Topo from './Sidebar/Topo';
import Meio from './Sidebar/Meio';
import Final from './Sidebar/Final';

import imagem from '../../../assets/img/catanacomics 1.png';

function Aside(props) {
    return (
        <aside className="sidebar">
            <Topo imagem={imagem} nome1="catanacomics" nome2="Catana" />
            <Meio />
            <Final />
        </aside>
    );
}

export default Aside;