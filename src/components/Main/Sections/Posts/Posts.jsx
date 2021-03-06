import React from 'react';

import Topo from './Post/Topo';
import MeioFinal from './Post/MeioFinal';


import { imagemUser1, imagemUser2, imagemPost1, imagemPost2, imagemCurtida1, imagemCurtida2 } from './Post/imagens';

function Posts(props) {
    const curtido = false;

    const informacoesPost = [
        {
            imagemUser: imagemUser1,
            legenda: "meowed",
            imagemPost: imagemPost1,
            curtiuImagem: imagemCurtida1,
            curtiuUser: "respondeai",
            pessoas: "100.523"
        },
        {
            imagemUser: imagemUser2,
            legenda: "barked",
            imagemPost: imagemPost2,
            curtiuImagem: imagemCurtida2,
            curtiuUser: "adorable_animals",
            pessoas: "99.159"
        }
    ];

    return (
        <section className="posts">
            
                {informacoesPost.map((informacoes, index) => {
                    return(
                        <div className="post" key={index}>
                            <Topo imagem={informacoes.imagemUser} legenda={informacoes.legenda} />
                            <MeioFinal imagem={informacoes.curtiuImagem} imagemPost={informacoes.imagemPost} user={informacoes.curtiuUser} pessoas={informacoes.pessoas} curtido={curtido} />
                        </div>
                    )
                })}
            
        </section>
    );
}

export default Posts;