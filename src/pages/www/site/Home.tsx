import React, { useState } from 'react';

export const Home = () => {
  // useState es un hook de React que añade un estado al componente funcional
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const addContador = () => {
    console.log('VEN Y SANA MI DOLOR');
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>VEN Y SANA MI DOLOOOOOOR</h1>
      <button onClick={addContador}>+CONTADOR</button>
      <h4>Contador: {contador}</h4>
    </div>
  );
};

export default Home;
