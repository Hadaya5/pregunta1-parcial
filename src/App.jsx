import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IniciarSesion } from './routes/IniciarSesion';
import { ForgotPassword } from './routes/ForgotPassword';
import { ResetPassword } from './routes/ResetPassword';

import './App.css';


function App() {
  return (
    <>
        Hola Mundo
        <Router>
          <Routes>
            <Route exact path="/login" element={<IniciarSesion />} />
            <Route exact path="/forgot-password" element={<ForgotPassword/>} />
            <Route exact path="/reset-password" element={<ResetPassword/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
