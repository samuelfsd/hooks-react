import  { useState } from 'react';


export const PageEstado = () => {
    const [label,setLabel] = useState('Hello');

    // const [label,setLabel] = useState(() => {
    //   //operação 1
    //   // operaçã02 

    //   //condição 
    //   if(true){
    //     return 'hello'
    //   }
    // });

    const onChangeLabel = () => {
        setLabel('Mudando o label')
    }

  return (
    <div>
        {label}
        <button onClick={onChangeLabel}>Atualizar estado</button>
    </div>
  );
}
