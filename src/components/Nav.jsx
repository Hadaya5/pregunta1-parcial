import React, { useEffect, useState, useContext } from 'react';
import '../styles/NavBar.scss';
import AuthContext from '../context/AuthContext';
import { useTranslation } from 'react-i18next';  
import perfil from '../assets/default-user-icon.jpg'
import { useNavigate } from 'react-router-dom';


export const NavBar = ({
}) => {

    const { t, i18n } = useTranslation();

    const [valorSeleccionado, setValorSeleccionado] = useState('es');

    useEffect(() => {

        if(valorSeleccionado === 'es'){
            i18n.changeLanguage("es");
        } 
        
        if(valorSeleccionado === 'en'){
            i18n.changeLanguage("en");
        }
    }, [valorSeleccionado]);

    return (
        <section className='containerPrincipal'>
          <section className='containerLogo'>
            <img
                src={perfil}
                style={{width:"3em", height:"auto"}}
            />
            <p>{t('nav.nombreLogo')}</p>

          </section>
          <section className='containerLogo'>
            <img
                src={perfil}
                style={{width:"3em", height:"auto"}}
            />
            <section className='containerPerfil'>

                <p>Pedro Pepe</p>
                <p> pedro@gmail.com</p>
            
            </section>

          </section>
            <section className='containerPerfil'>
                <select id="idioma" value={valorSeleccionado} onChange={(event) => setValorSeleccionado(event.target.value)}>
                   {/*  <option value="">-- Selecciona un idioma --</option> */}
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                </select>
            </section>
        </section>
    );
};


const ITEM = [
    {
        label: "nav.inicio",
        path: "/inicio"
    },
    {
        label: "nav.monitoreo",
        path: "/monitorear-publicacion"
    },
    {
        label: "nav.notificarPago",
        path: "/notificar-pago"
    },
    {
        label: "nav.formaPago",
        path: "/forma-de-pago"
    },
    {
        label: "nav.datoContacto",
        path: "/datos-contacto"
    },
    {
        label: "Contacto",
        path: "/contacto"
    },
    {
        label: "nav.Salir",
        path: "#"
    },

]




export const NavMenu = ({
    cerrarSesion
}) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const {authState, setAuthState} = useContext(AuthContext);

    if ( authState.type == "CEO"){
        ITEM[1] = {
                label: "nav.cotizacion",
                path: "/cotizacion"
        }
        
    }

    /*label: (() => ItemNav()) ? "nav.cotizacion" : "nav.monitoreo",
        path: (() => ItemNav()) ? "/cotizaciones" : "/monitorear-publicacion",*/

    return(
        <section className='containerMenu'>
            {
                ITEM.map((item, index) => (
                    
                    <section 
                        onClick={() =>{
                            console.log("item.label item.label", item.label);
                            if(item.label === "nav.Salir"){
                                cerrarSesion();
                                return;
                            }

                            navigate(item?.path)
                            
                            }}  
                            className="opcionesMenu" 
                            key={`nav-00-${index}`}
                        > 
                            <p key={`p-00${index}`}> {t(item?.label)}</p>
                    </section>
                ))


            }
        </section>
    )
}