//importação de componentes
import PrimeiroComponente from './components/PrimeiroComponente'
import TemplateExpression from './components/TemplateExpression'
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
      </div>
    </>
  )
}

export default App
