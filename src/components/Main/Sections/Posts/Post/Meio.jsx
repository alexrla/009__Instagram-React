import React from 'react';

function Meio(props) {
    return (
        <div className="meio">
            <img src={props.imagem} className="meio__foto" alt="" />
        </div>
    );
}

export default Meio;