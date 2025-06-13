//Template expression

const TemplateExpression = () => {
  const name = "Aluno"

  const data = {
    idade: 18,
    funcao: "Aluno"
  }

  return (
    <div>
        <h1>TemplateExpression</h1>
        <p>A soma é { 2 + 2} </p>  
        <h2>Bem vindo {name} </h2>  
        <p>
          Você tem {data.idade} anos de idade e você é {data.funcao}
        </p>
    </div>
  )
}

export default TemplateExpression