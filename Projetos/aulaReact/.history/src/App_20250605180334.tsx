//importação de componentes
import PrimeiroComponente from './components/PrimeiroComponente'
import TemplateExpression from './components/TemplateExpression'
import MeuComponente from './components/MeuComponente'
import Evento from './components/Evento'
import './App.css'

function App() {
  //comentário
  return (
    <>
      <div>
        {/*comentário JSX */}
       <h1>Fundamentos React</h1>
       <PrimeiroComponente/>
       <TemplateExpression/>
       <MeuComponente/>
       <Evento/>
       
      </div>
    </>
  )
}

export default App
