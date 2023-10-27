import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro/Registro.jsx';


function App() {
  const templateMain='d-flex flex-row justify-content-center align-items-center';

  return (
    <>
      <main className={templateMain}>
        <Registro stringWidth="21rem" stringHeight="30rem"></Registro>
      </main>
      
    </>
  );
};

export default App;
