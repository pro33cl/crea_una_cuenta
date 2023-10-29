import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = (props) => {
    const {handForm}=props;
    const [dlgbox, SetDlgbox]=useState({name:"",email:"", password1:"", password2:""});

    const handlerOnChange = function(e){
        SetDlgbox({
                ...dlgbox,
                [e.target.name]:e.target.value});
    };

    const handlerSubmit= function (e){
        e.preventDefault();
        let verificationReturn= {dataComplete:false, dataVerification:false, messageSubmit:""}; 
        for(var i=0; i<4;i++){
            if(e.target[i].value==""){
                verificationReturn.dataComplete=false;
            }
            else{
                verificationReturn.dataComplete=true;
            }
        }
        if(verificationReturn.dataComplete==false){
            verificationReturn.messageSubmit="Datos incompletos, completar por favor";
        }
        else if(verificationReturn.dataComplete==true){
            verificationReturn= assignVerification(verificationReturn, formatName(dlgbox));
            verificationReturn= assignVerification(verificationReturn, formatEmail(dlgbox));
            verificationReturn= assignVerification(verificationReturn, formatPassword(dlgbox));
        }
        if(verificationReturn.dataComplete==true && verificationReturn.dataVerification==true){
            enviarBackend(dlgbox);
            verificationReturn.messageSubmit="Datos enviados correctamente";
            SetDlgbox({name:"",email:"", password1:"", password2:""});
        }
        handForm(verificationReturn);
    };

    const enviarBackend= function (inputs){
        console.log("Se envían inputs al Backend:");
        console.log(inputs);
    };

    const assignVerification = function (verificationReturn, verificationData){
        verificationReturn.dataComplete = verificationData.dataComplete;
        verificationReturn.dataVerification = verificationData.dataVerification;
        verificationReturn.messageSubmit+=verificationData.messageSubmit;
        return verificationReturn;
    };

    const formatName= function(inputs){
        let nameComplete=false;
        let nameMessage="";
        const templateName= /^[-a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\W+[-a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\W+[-\s[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]]+)?$/;
        if(templateName.test(inputs.name)){
            nameComplete=true;
        }
        else{
            nameComplete=false;
            nameMessage= "Ingresar Nombre en formato correcto\n"
        }
        return {dataComplete: true, dataVerification: nameComplete, messageSubmit: nameMessage};
    };

    const formatEmail= function(inputs){
        let emailComplete=false;
        let emailMessage="";
        const templateEmail=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(templateEmail.test(inputs.email)){
            emailComplete=true;
        }
        else{
            emailComplete=false;
            emailMessage= "Correo incorrecto\n"
        }
        return {dataComplete: true, dataVerification: emailComplete, messageSubmit: emailMessage};
    };

    const formatPassword= function(inputs){
        let passwordComplete=false;
        let passwordMessage="";
        const templatePassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        if(templatePassword.test(inputs.password1)){
            if(inputs.password1==inputs.password2){
                passwordComplete=true;
            }
            else{
                passwordComplete=false;
                passwordMessage= "Contraseñas no coinciden\n";
            }
        }
        else{
            passwordComplete=false;
            passwordMessage= "Contraseña debe contener: mínimo 8 caracteres, máximo 15, al menos una letra mayúscula, al menos una letra minúscula, al menos un dígito, sin espacios, al menos un carácter especial\n"; 
        }
        return {dataComplete: true, dataVerification: passwordComplete, messageSubmit: passwordMessage};
    };

  return (
    <>
        <Form style={{width:"100%"}} onSubmit={handlerSubmit}>
            <Form.Group className="mt-2 mb-2">
                <Form.Control type="text" placeholder="Nombre" name='name' onChange={handlerOnChange} value={dlgbox.name}/>
            </Form.Group>
            <Form.Group className="mt-2 mb-2">
                <Form.Control type="email" placeholder="tuemail@ejemplo.com" name='email' onChange={handlerOnChange} value={dlgbox.email}/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control type="password" placeholder="Contraseña" name="password1" onChange={handlerOnChange} value={dlgbox.password1}/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control type="password" placeholder="Confirma tu contraseña" name="password2" onChange={handlerOnChange} value={dlgbox.password2}/>
            </Form.Group>
            <Button variant="success" type="submit" style={{width:"100%"}}>
                Registrarse
            </Button>
        </Form>
    </>
  );
};

export default Formulario;