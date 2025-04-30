import React, { useState } from 'react';
import './style.css';

const perguntas = [
  {
    pergunta: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    resposta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
  },
  {
    pergunta: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    resposta: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
  },
  {
    pergunta: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    resposta: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
  },
  {
    pergunta: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    resposta: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent."
  },
  {
    pergunta: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
    resposta: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
  }
];

export default function Questions() {
  const [ativa, setAtiva] = useState(null);

  const toggle = (index) => {
    setAtiva(ativa === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="gradiente-texto">Frequently asked questions</h1>
        <p className="subtitulo">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar
          purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>

        <div className="acordeao">
          {perguntas.map((item, index) => (
            <div className="item" key={index}>
              <button className="pergunta" onClick={() => toggle(index)}>
                <span>{item.pergunta}</span>
                <span className={`seta ${ativa === index ? 'aberta' : ''}`}>▼</span>
              </button>
              <div className={`resposta ${ativa === index ? 'aberta' : ''}`}>
                {item.resposta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
