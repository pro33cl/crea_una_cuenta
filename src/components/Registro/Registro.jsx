import 'bootstrap/dist/css/bootstrap.min.css';
import SocialButton from '../SocialButton/SocialButton.jsx';
import Formulario from '../Formulario/Formulario.jsx';
import MyAlert from '../MyAlert/Alert.jsx';
import { useState } from 'react';


const Registro = (props) => {
    const {stringWidth, stringHeight, handRegis, verification}=props;
    const templateBox_01='bg-white d-flex flex-column justify-content-center align-items-center m-4 p-4 border border-0 rounded-4';
    const [submitClick, SetSubmitClick] = useState(0);
  
   
    const handlerFormulario=function(verificationReturn){
        handRegis(verificationReturn);
        SetSubmitClick(1);
    }


    return (
    <>
        <div className={templateBox_01} style={{width:stringWidth, height:stringHeight}}>
            <h1 className='fs-3'>Crea una cuenta</h1>
            <p>O usa tu email para registrarte</p>
            <div className='d-flex flex-row justify-content-evenly align-items-center' style={{width:"100%"}}>
                <SocialButton stringName="facebook" stringSize="5" iconColor="#000000" iconHref="#"></SocialButton>
                <SocialButton stringName="github" stringSize="5" iconColor="#000000" iconHref="#"></SocialButton>
                <SocialButton stringName="linkedin" stringSize="5" iconColor="#000000" iconHref="#"></SocialButton>
            </div>
            <Formulario handForm={handlerFormulario}></Formulario>
            {submitClick==1? <MyAlert verification= {verification}></MyAlert>:null}
        </div>
    </>

  );
};

export default Registro;