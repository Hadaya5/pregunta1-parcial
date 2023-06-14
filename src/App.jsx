import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { IniciarSesion } from "./routes/IniciarSesion";
import {NavPrincipal} from './components/NavPrincipal';
import "./App.css";
import { useEffect, useState } from "react";
import {NotificarPago} from './routes/NotificarPago';


function App() {
   
    const [autorizacion, setAutorizacion]= useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        setAutorizacion(token);
      }, []);
    
      function cerrarSesion() {
        localStorage.removeItem('token');
        setAutorizacion(null); // Actualiza el estado de la autorización.
      }
    
    return (
        <>
            <Router>
                <>
                {!autorizacion ?(
                        <Routes>
                            <Route
                                exact
                                path="/login"
                                element={<IniciarSesion />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/login" />}
                            />
                        </Routes>
                    )
                    :
                    (
                        <NavPrincipal cerrarSesion={cerrarSesion}>
                            <Routes>
                                <Route
                                    exact
                                    path="/notificar-pago"
                                    element={<NotificarPago/>}
                                />
                                <Route
                                    exact
                                    path="/inicio"
                                    element={<> inicio</>}
                                />
                                <Route
                                    exact
                                    path="/monitorear-publicacion"
                                    element={<> monitorear-publicacion</>}
                                />
                                <Route
                                    exact
                                    path="/forma-de-pago"
                                    element={<> forma-de-pago</>}
                                />
                                <Route
                                    exact
                                    path="/datos-contacto"
                                    element={<>/datos-contacto</>}
                                />
                                {/* Ruta predeterminada */}
                                {/* <Route
                                    path="*"
                                    element={<Navigate to="/login" />}
                                /> */}
                            </Routes>
                        </NavPrincipal>
                        
                    )}
                </>
            </Router>
        </>
    );
}

export default App;
