import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
  return (
    <>
        <Form style={{width:"100%"}}>
            <Form.Group className="mt-2 mb-2" controlId="Name">
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mt-2 mb-2" controlId="Email">
                <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="Password1">
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="Password2">
                <Form.Control type="password" placeholder="Confirma tu contraseña" />
            </Form.Group>
            <Button variant="success" type="submit" style={{width:"100%"}}>
                Registrarse
            </Button>
        </Form>
    </>
  );
};

export default Formulario;