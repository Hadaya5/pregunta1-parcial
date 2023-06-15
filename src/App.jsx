import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { IniciarSesion } from './routes/IniciarSesion';
import { ForgotPassword } from './routes/ForgotPassword';
import { ResetPassword } from './routes/ResetPassword';
import { NavPrincipal } from "./components/NavPrincipal";
import "./App.css";
import { useEffect, useState } from "react";
import { Inicio } from "./routes/Inicio";
import { AuthContextProvider } from "./context/AuthContext";
import {NotificarPago} from './routes/NotificarPago';
import FormaPago from "./routes/FormaPago";



function App() {
    const [autorizacion, setAutorizacion] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        setAutorizacion(token);
    }, []);

    function cerrarSesion() {
        localStorage.removeItem("token");
        setAutorizacion(null); // Actualiza el estado de la autorización.
    }

    return (
        <>
          <AuthContextProvider>
            <Router>
                <>
                    {!autorizacion ? (
                        <Routes>
                            <Route
                                exact
                                path="/login"
                                element={<IniciarSesion />}
                            />
                            <Route
                                exact
                                path="/forgot-password"
                                element={<ForgotPassword />}
                            />
                            <Route
                                exact
                                path="/reset-password"
                                element={<ResetPassword />}
                            />

                            <Route
                                path="*"
                                element={<Navigate to="/login" />}
                            />
                        </Routes>
                    ) : (
                        <NavPrincipal cerrarSesion={cerrarSesion}>
                            <Routes>
                                <Route
                                    exact
                                    path="/inicio"
                                    element={<Inicio/>}
                                />

                                <Route
                                    exact
                                    path="/cotizaciones"
                                    element={<> COTIZACINES</>}
                                />
                                <Route
                                    exact
                                    path="/notificar-pago"
                                    element={<NotificarPago/>}
                                />
                                
                                <Route
                                    exact
                                    path="/monitorear-publicacion"
                                    element={<> monitorear-publicacion</>}
                                />
                                <Route
                                    exact
                                    path="/forma-de-pago"
                                    element={<FormaPago/>}
                                />
                                <Route
                                    exact
                                    path="/datos-contacto"
                                    element={<>/datos-contacto</>}
                                />
                                {/* Ruta predeterminada */}
                                <Route
                                    path="*"
                                    element={<Navigate to="/inicio" />}
                                /> 
                            </Routes>
                        </NavPrincipal>
                    )}
                </>
            </Router>
          </AuthContextProvider>
        </>
    );
}

export default App;
