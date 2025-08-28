import React from 'react'

const Evento = () => {
  return (
    <div>
        <button onClick={{()=> console.log("Testando um evento")}}>
            Clique aqui!
        </button>
    </div>
  )
}

export default Evento