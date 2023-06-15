import React, { useState, useEffect, useContext } from 'react'
import '../styles/Inicio.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useTranslation } from 'react-i18next'; 
import users from "../data/users.json"
import AuthContext from '../context/AuthContext';


export const Inicio = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
    const [userType, setUserType] = useState('')
    const {authState, setAuthState} = useContext(AuthContext);
    const usuarios = users.users;

    const [notificacionEnProceso, setNotificacionEnProceso] = useState([{
        fecha: '02-04-2019',
        hora: '11:12 am',
        banco: 'Banesco Panamá',
        nroTransferencia: '000-021-324-35-678',
        monto: '30 USD',
        cliente: 'Click aquí',
        nroConfirmacion: '452682',
        checked: '1'
    },
    {
        fecha: '15-04-2019',
        hora: '11:12 am',
        banco: 'Banesco Panamá',
        nroTransferencia: '000-027-425-45-675',
        monto: '27 USD',
        cliente: 'Click aquí',
        nroConfirmacion: '134862',
        checked: '2'
    },
    {
        fecha: '05-05-2020',
        hora: '11:12 am',
        banco: 'Mercantil Panamá',
        nroTransferencia: '000-023-456-73-841',
        monto: '52 USD',
        cliente: 'Click aquí',
        nroConfirmacion: '723675',
        checked: '3'
    }
    

    ])


    const [notificacionRechazada, setNotificacionRechazada] = useState([
        {
            fecha: '25-12-2022',
            hora: '01:50 pm',
            banco: 'Mercantil Venezuela',
            nroTransferencia: '000-125-599-91-752',
            monto: '26 USD',
            cliente: 'Click aquí',
            nroConfirmacion: '475698',
            checked: '4'
        },
        {
            fecha: '30-10-2022',
            hora: '01:52 pm',
            banco: 'Bancaribe Venezuela',
            nroTransferencia: '000-147-822-96-741',
            monto: '59 USD',
            cliente: 'Click aquí',
            nroConfirmacion: '752415',
            checked: '7'
        },
        {
            fecha: '12-06-2015',
            hora: '11:23 pm',
            banco: 'Bancaribe Venezuela',
            nroTransferencia: '000-586-075-56-782',
            monto: '25 USD',
            cliente: 'Click aquí',
            nroConfirmacion: '197503',
            checked: '6'
        }
    ])
    const [notificacionProcesada, setNotificacionProcesada] = useState([
        {
            fecha: '06-09-2015',
            hora: '05:51 pm',
            banco: 'Bancamiga',
            nroTransferencia: '000-125-652-12-752',
            monto: '42 USD',
            cliente: 'Click aquí',
            nroConfirmacion: '926982',
            checked: '5'
        }
    ])

    useEffect(() => {
        const token = localStorage.getItem("token");
        const language = localStorage.getItem("language");
        i18n.changeLanguage( language );

        for(let i=0; i < usuarios.length; i++){
            if(token == usuarios[i].code){
                setAuthState(
                    () => {
                        return {
                            logged_in: true,
                            code: token,
                            type: usuarios[i].type,
                            name: usuarios[i].name,
                            email: usuarios[i].email
                        }
                    }
                )
                setUserType(usuarios[i].type)
            }
        }
    }, []);

    const handleNotificacionEnProceso = () => {

        notificacionEnProceso.map( notif => {
            let checkbox = document.getElementById( notif.checked );

            if ( checkbox.checked ){
                
                setNotificacionProcesada([...notificacionProcesada, notif]);
                const aux = notificacionEnProceso.filter( e => e.checked !== notif.checked )
                setNotificacionEnProceso(aux)
            }
        })
    }


    const handleNotificacionRechazada = () => {
        
        notificacionRechazada.map( notif => {
            let checkbox = document.getElementById( notif.checked );

            if ( checkbox.checked ){
                
                setNotificacionProcesada([...notificacionProcesada, notif]);
                const aux = notificacionRechazada.filter( e => e.checked !== notif.checked )
                setNotificacionRechazada(aux)
            }
        })
    }

  return (
<>
    {   userType === 'CEO' || userType === 'Asistente'
        ? 
            <div id='containerCEO'>
                <h2>Leyenda</h2>
                <div id="containerBox1">
                    <p id="box1">Mis notificaciones</p>
                </div>
                <div id="containerStatus">
                    <div>
                        <p className='estatus'>Estatus</p>
                        <p className='estatus proceso1'>En proceso</p>
                    </div>
                    <div>
                        <p className='estatus'>Estatus</p>
                        <p className='estatus proceso2'>Procesada</p>
                    </div>
                    <div>
                        <p className='estatus'>Estatus</p>
                        <p className='estatus proceso3'>Rechazada</p>
                    </div>
                </div>

                

                <div id='containerTables'>
                    <div className='containerButtons'>
                        <button id='botonProcesar' onClick={ handleNotificacionEnProceso }>Procesada</button>
                        <button id='botonRechazar'>Rechazada</button>
                    </div>

                    <h1 id="enProceso">En proceso</h1>
                    <p className='misNotificaciones'>Mis notificaciones</p>
                    <table>
                        <tr>
                            <th className='border-checkbox' ></th>
                            <th>Fecha de notificación de pago</th>
                            <th>Hora</th>
                            <th>Banco destino</th>
                            <th>Nro. de transferencia</th>
                            <th>Monto</th>
                            <th>Cliente</th>
                            <th>Nro. de confirmación</th>
                        </tr>

                        {notificacionEnProceso.map( notif => 
                            <tr>
                                <td className='border-checkbox'><input type="checkbox" id={notif.checked}/></td>
                                <td>{notif.fecha}</td>
                                <td>{notif.hora}</td>
                                <td>{notif.banco}</td>
                                <td>{notif.nroTransferencia}</td>
                                <td>{notif.monto}</td>
                                <td><a href="#">Click aquí</a></td>
                                <td><a href="#">{notif.nroConfirmacion}</a></td>
                            </tr>
                            )
                        }

                    </table>

                    <h1 id="procesada">Procesada</h1>
                    <p className='misNotificaciones'>Mis notificaciones</p>
                    <table>
                        <tr>
                            <th className='border-checkbox' ></th>
                            <th>Fecha de notificación de pago</th>
                            <th>Hora</th>
                            <th>Banco destino</th>
                            <th>Nro. de transferencia</th>
                            <th>Monto</th>
                            <th>Cliente</th>
                            <th>Nro. de confirmación</th>
                        </tr>
                        {notificacionProcesada.map( notif => 
                            <tr>
                                <td className='border-checkbox'><input type="checkbox"/></td>
                                <td>{notif.fecha}</td>
                                <td>{notif.hora}</td>
                                <td>{notif.banco}</td>
                                <td>{notif.nroTransferencia}</td>
                                <td>{notif.monto}</td>
                                <td><a href="#">Click aquí</a></td>
                                <td><a href="#">{notif.nroConfirmacion}</a></td>
                            </tr>
                            )
                        }
                    </table>

                    <div className='containerButtons'>
                        <button id='botonEnviar'>Enviar correo</button>
                        <button onClick={ handleNotificacionRechazada } id='botonProcesar'>Procesada</button>
                    </div>

                    <h1 id="rechazada">Rechazada</h1>
                    <p className='misNotificaciones'>Mis notificaciones</p>
                    <table>
                        <tr>
                            <th className='border-checkbox' ></th>
                            <th>Fecha de notificación de pago</th>
                            <th>Hora</th>
                            <th>Banco destino</th>
                            <th>Nro. de transferencia</th>
                            <th>Monto</th>
                            <th>Cliente</th>
                            <th>Nro. de confirmación</th>
                        </tr>
                        {notificacionRechazada.map( notif => 
                            <tr>
                                <td className='border-checkbox'><input type="checkbox" id={notif.checked}/></td>
                                <td>{notif.fecha}</td>
                                <td>{notif.hora}</td>
                                <td>{notif.banco}</td>
                                <td>{notif.nroTransferencia}</td>
                                <td>{notif.monto}</td>
                                <td><a href="#">Click aquí</a></td>
                                <td><a href="#">{notif.nroConfirmacion}</a></td>
                            </tr>
                            )
                        }
                    </table>
                </div>

            </div>

        :

            <div className='Inicio'>
                <div className='columna1'>
                    <h3 id='title'>{t('inicio.vivienda')} XXX</h3>
                    <h4 id='box1'>{t('inicio.titulo')}</h4>
                    <p>{t('inicio.estimado')}<br/>{t('inicio.descripcion-proceso-pago')} <a href="#">www.notificarPagoVivienda.com</a></p>
                    <br/>
                    <p>{t('inicio.invitamos')}</p>

                    <div>
                        <h3 id='boxVideo'>{t('inicio.video')}</h3>
                    </div>

                </div>

                <div className='columna2'>
                    <h4 className='titleTable'>{t('inicio.datos-vivienda')}</h4>

                    <div className='container1'>
                        <div className='subcolumna1 bold'>
                            <p>{t('inicio.País')}</p>
                            <p>{t('inicio.Estado')}</p>
                            <p>{t('inicio.Ciudad')}</p>
                            <p>{t('inicio.Zona')}</p>
                            <p>{t('inicio.Descripción')}</p>
                            <p>{t('inicio.Fecha-publicación')}</p>
                            <p>{t('inicio.Fecha-vencimiento')}</p>
                            <p>{t('inicio.País-procedencia')}</p>
                            <p>{t('inicio.Tipo-publicación')}</p>
                            <p>{t('inicio.Idioma-publicación')}</p>
                        </div>
                        <div className='subcolumna2'>
                            <p className='simulacion'>Estados Unidos</p>
                            <p className='simulacion'>California</p>
                            <p className='simulacion'>Menlo Park</p>
                            <p className='simulacion'>Golden Garden</p>
                            <a id='link' onClick={ () => setIsOpen(true) }>Click aquí</a>
                            <p className='simulacion'>Jueves 11/07/2019</p>
                            <p className='simulacion'>Viernes 11/07/2019</p>
                            <p className='simulacion'>Estados Unidos</p>
                            <p className='simulacion'>Alquiler</p>
                            <p className='simulacion'>Español</p>
                        </div>
                    </div>
                    
                    <div className='container2 bold'>
                        <span className='box2'>{t("inicio.precio")} </span>
                        <span className='box2'>30 USD</span>
                    </div>

                    <h3 style={{textAlign: "center"}}>
                        <span className='red'>{t("inicio.codigo-cliente")} </span>xxxxxx
                    </h3>

                    <div id='center-button'>
                        <button>{t("inicio.notificar-pago")}</button>
                    </div>
                
                    <Popup id='popup-hola' open={isOpen} onClose={() => setIsOpen(false)} >
                        <div id='popup-container'>
                        <div className="header">{t("inicio.descripcion-vivienda")}</div>
                            <p className='modal simulacion'>Esta propiedad cuenta con una amplia sala de estar con grandes ventanales que permiten la entrada de mucha luz natural y una hermosa vista al jardín. La cocina es moderna y está totalmente equipada con electrodomésticos de alta calidad, lo que la convierte en un lugar ideal para preparar deliciosas comidas.</p>
                            <div>
                                <button id="boton-aceptar">{t("inicio.boton-aceptar")}</button>
                            </div>
                        </div>
                    </Popup>

                </div>
            </div>

    }



    </>
  )
}
