import React from 'react';

function Final(props) {
    return (
        <div className="final">
            <div className="final__secao_1">
                <div className="secao_1_1">
                    <ion-icon name="heart-outline" />

                    <ion-icon name="chatbubble-outline" />

                    <ion-icon name="paper-plane-outline" />
                </div>

                <div className="secao_1_2">
                    <ion-icon name="bookmark-outline" />
                </div>
            </div>

            <div className="final__secao_2">
                <img src={props.imagem} className="final__imagem" alt="" />

                <p className="final__texto">
                    Curtido por <span className="negrito">{props.user}</span> e <span className="negrito">outras {props.pessoas} pessoas</span>
                </p>
            </div>
        </div>
    );
}

export default Final;