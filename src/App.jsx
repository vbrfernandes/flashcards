import { useState } from 'react'
import aprendido from './assets/img/barraDePontos/aprendido.png';
import correct from './assets/img/barraDePontos/correct.png';
import pular from './assets/img/barraDePontos/pular.png';
import reset from './assets/img/barraDePontos/reset.png';


import './App.css'

function App() {
  

  return (
    <>
    <div>
      <h1>Flash Cards</h1>
    </div>
    <div className='barraChecagemPontos'>
      <div className='barraProgresso' ></div>
      <div className='iconscolection'>
        <img className='icones' src={aprendido} alt="" /><button className='iconName'>aprendido</button>
        <img className='icones' src={correct} alt="" /><button className='iconName'>correct</button>
        <img className='icones' src={pular} alt="" /><button className='iconName'>pular</button>
        <img className='icones' src={reset} alt="" /><button className='iconName'>reset</button>
      </div>

    </div>
      <div className="card">
        <h1 className="textoCard">Inicio das Perguntas</h1>
        {/* <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button> */}
        <a href="">Click para revelar a resposta.</a>
      </div>
      <div>
        <button>Já sei a resposta!</button>
        <button>Não sei Responder esta!</button>
        <button>Pular Pergunta</button>
      </div>
    </>
  )
}

export default App
