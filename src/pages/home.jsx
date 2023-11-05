  import React, { useEffect, useState } from 'react';
  import Layouts from '../layouts/layouts';
  import { TypeAnimation } from 'react-type-animation';

  function Home() {
    const [showMensage, setShowMensage] = useState(true);
    useEffect(()=>{
      setTimeout(() => {
        setShowMensage(false)
      }, 10000);
    },[showMensage])
    return (
      <Layouts>
        <div className='flex itens-center justify-center text-center w-full'>
          <TypeAnimation
            sequence={[
              'Bem vindo ao gestor de horários ',
              1000,
              "Sistema de gestão de horários educacional",
              1000,  "Desenvolvido pelo IFBA ",
              1000,

            ]}
            speed={50}
            wrapper='span'
            style={{fontFamily:"Roboto Mono"}}
            className='text-3xl font-bold text-gray-600 '
            repeat={false}
            cursor={showMensage}
          />
        </div>
      </Layouts>
    );
  }

  export default Home;
