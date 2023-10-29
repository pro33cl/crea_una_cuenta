import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro/Registro.jsx';
import { useState } from 'react';


function App() {
  const templateMain='d-flex flex-row justify-content-center align-items-center';
  const [verification, SetVerification]=useState({dataComplete:false, dataVerification:false, messageSubmit:""});
 
  const handlerRegistro=function(verificationReturn){
    SetVerification(verificationReturn);
  }
  

  return (
    <>
      <main className={templateMain}>
        <Registro stringWidth="21rem" stringHeight="34rem" handRegis={handlerRegistro} verification={verification}></Registro>
      </main>
      
    </>
  );
};

export default App;
