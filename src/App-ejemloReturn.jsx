import hookIncrement from './hooks/hookIncrement'

const App = () => {
  
  //Se desestructura lo que el hook retorna
  const{contador, Incrementar}=hookIncrement(1);

  return (
    <>      
      <div className="container">
      <h3>Práctica de hook personalizado</h3>
      <code>
        Se utiliza un archivo js con la función y datos para ser utilizados y mostrados por la UI
      </code>

      <hr></hr>
      <h1> Valor: {contador}</h1>

        <button className='btn btn-primary md'
         onClick={Incrementar}>  
         Incrementar
        </button>
        <p></p>

<div className="fixed-bottom">
  <div className=" card-header  text-white bg-dark mb-3 .fs-8">
     Quote
  </div>
  <div className=" text-end .fs-8">
    <blockquote className="blockquote mb-0">
      <p> <code className="read-the-docs"> Nunca dejes de aprender ni de practicar </code></p>
      <footer className="blockquote-footer"> Yo <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
 </div>
    </>
  )
}

export default App
