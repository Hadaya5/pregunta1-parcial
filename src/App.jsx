import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IniciarSesion } from "./routes/IniciarSesion";
import {NavPrincipal} from './components/NavPrincipal';
import "./App.css";

function App() {
    const user = false;
    return (
        <>
            <Router>
                <>
                    {user ? (
                        <Routes>
                            <Route
                                exact
                                path="/login"
                                element={<IniciarSesion />}
                            />
                        </Routes>
                    ) : (
                        <NavPrincipal>
                            <Routes>
                                <Route
                                    exact
                                    path="/notificar-pago"
                                    element={<> hola notificar pago</>}
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
                            </Routes>
                        </NavPrincipal>
                    )}
                </>
            </Router>
        </>
    );
}

export default App;
