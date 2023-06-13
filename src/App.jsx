import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IniciarSesion } from './routes/IniciarSesion';
import './App.css';


function App() {
  return (
    <>
        Hola Mundo
        <Router>
          <Routes>
            <Route exact path="/login" element={<IniciarSesion />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
