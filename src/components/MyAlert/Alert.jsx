import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


const MyAlert = (props) => {
  
  const {verification}=props;
  
  const typeMessage= function(verification){
    let type = "danger";
    if(verification.dataComplete==true && verification.dataVerification==true){
      type= "success";
    }
    return type;
  };

  const message= function(verification){
    return verification.messageSubmit;
  };

    return (
    
    <>
        <Alert key={typeMessage(verification)} variant={typeMessage(verification)} className='mt-3' style={{width:"100%", fontSize:"0.8rem"}}>
          {message(verification)}
        </Alert>
    </>
  );
};

export default MyAlert;
