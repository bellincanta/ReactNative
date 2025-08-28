

const Evento = () => {

  const handleClick = () => {
    console.log("Executou")
  }

  //Função de renderização 
  const renderSomething = (x: boolean) => {
    if (x) {
      return <h1>Renderizando verdadeiro!</h1>
    } else { 
      return <h1>Renderizando falso!</h1>
    }
  }

return 10 > 2 && <p>Carregando....</p>

  return (
    <div>
        <button onClick={()=> console.log("Testando um evento")}>
            Clique aqui!
        </button>
      {/* Evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui com função</button>
      </div>
      {/* Função render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Evento