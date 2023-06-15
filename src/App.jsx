import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IniciarSesion } from './routes/IniciarSesion';
import './App.css';
import DatosContacto from './components/DatosContacto';


function App() {
  return (
    <>
        Hola Mundo
        <Router>
          <Routes>
            <Route exact path="/login" element={<IniciarSesion />} />
          </Routes>
        </Router>
        <DatosContacto/>
    </>
  );
}

export default App;
