import React from 'react';

const imagens = [
  { src: 'src/img/Mask Group.svg', alt: 'Imagem 1', texto: 'Texto para imagem 1' },
  { src: 'src/img/foto-homo-venda2.svg', alt: 'Imagem 2', texto: 'Texto para imagem 2' },
  { src: 'src/img/foto-homo-venda3.svg', alt: 'Imagem 3', texto: 'Texto para imagem 3' },
];

export function GaleriaDeImagens() {
  return (
    <div>
      {imagens.map((imagem, index) => (
        <div key={index} className={style.item}>
          <img className={style.imagem} src={imagem.src} alt={imagem.alt} />
          <p className={style.texto}>{imagem.texto}</p>
        </div>
      ))}
    </div>
  );
}
