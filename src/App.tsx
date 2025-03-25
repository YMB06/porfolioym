import { useState } from 'react';

import './App.css'
import './index.css'

function App() {
  // useState es un hook de React, añade un estado de la variable contador
  //a nuestro componente funcional App --> .tsx  -- codigo  --> return(vista)
  // componentes -- inicio.ts
  //contador = 0
const [ contador, setcontador] = useState(0);
// contador = contador +1;

const addContador = () => {
  console.log('VEN Y SANA MI DOLOR')
  setcontador(contador+1);
}
  return (
<div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={addContador}>+CONTADOR</button>
      <h4>Contador: (contador)</h4>
      </div>
  )
}

export default App
