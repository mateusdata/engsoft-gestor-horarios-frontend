import React, { useContext } from 'react';
import Layouts from '../layouts/layouts';
import { MainContext } from '../context/globalContext';

function Home() {
  const {user2} = useContext(MainContext);

  return (
    <Layouts>
     <div>
      Home
      {user2}
     </div>
    </Layouts>
  );
}

export default Home;
