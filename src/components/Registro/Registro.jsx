import React from 'react';
import SocialButton from '../SocialButton/SocialButton.jsx';
import Formulario from '../Formulario/Formulario.jsx';
import MyAlert from '../MyAlert/Alert.jsx';


const Registro = (props) => {
    const {stringWidth, stringHeight}=props;
    const templateBox_01='bg-white d-flex flex-column justify-content-center align-items-center m-4 p-4 border border-0 rounded-4';
  
    return (
    <>
        <div className={templateBox_01} style={{width:stringWidth, height:stringHeight}}>
            <h1>Crea una cuenta</h1>
            <p>O usa tu email para registrarte</p>
            <div className='d-flex flex-row justify-content-evenly align-items-center' style={{width:"100%"}}>
                <SocialButton stringName="facebook" stringSize="5" iconColor="#000000" ></SocialButton>
                <SocialButton stringName="github" stringSize="5" iconColor="#000000" ></SocialButton>
                <SocialButton stringName="linkedin" stringSize="5" iconColor="#000000" ></SocialButton>
            </div>
            <Formulario></Formulario>
            <MyAlert message="Error" typeMessage="danger"></MyAlert>
        </div>
    </>

  );
};

export default Registro;