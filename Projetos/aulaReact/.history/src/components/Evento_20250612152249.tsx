

const Evento = () => {

  const handleClick = (e) => {
    console.log(e)
    console.log("Executou")
  }


  return (
    <div>
        <button onClick={()=> console.log("Testando um evento")}>
            Clique aqui!
        </button>
      {/* Evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui com função</button>
      </div>
    </div>
  )
}

export default Evento