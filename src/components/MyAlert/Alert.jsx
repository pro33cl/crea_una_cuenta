import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


const MyAlert = (props) => {
  
  const {message,typeMessage}=props;
    return (
    
    <>
        <Alert key={typeMessage} variant={typeMessage} className='mt-3' style={{width:"100%"}}>
          {message}
        </Alert>
    </>
  );
};

export default MyAlert;
