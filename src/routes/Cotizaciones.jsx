import React, { useState } from 'react'
import "../styles/Cotizaciones.scss"
import { BsFillPencilFill, BsFillXCircleFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next'; 

export const Cotizaciones = () => {

    const { t, i18n } = useTranslation();
    const [editingId, setEditingId] = useState(null);
    const [editFechaGenero, setEditFechaGenero] = useState('');
    const [editFechaVencimiento, setEditFechaVencimiento] = useState('');
    const [editMonto, setEditMonto] = useState('');

    const [notificacionPendiente, setNotificacionPendiente] = useState([
        {
            codigoCotizacion: '1',
            codidoCliente: '843156',
            cliente: 'José Armando',
            fechaGenerado: 'Por definir',
            fechaVencimiento: 'Por definir',
            monto: 'Por definir',
            checked: '10'
        },
        {
            codigoCotizacion: '2',
            codidoCliente: '452282',
            cliente: 'Mariana Sanchéz',
            fechaGenerado: 'Por definir',
            fechaVencimiento: 'Por definir',
            monto: 'Por definir',
            checked: '11'
        },
        {
            codigoCotizacion: '3',
            codidoCliente: '612570',
            cliente: 'Raul Ramírez',
            fechaGenerado: 'Por definir',
            fechaVencimiento: 'Por definir',
            monto: 'Por definir',
            checked: '12'
        }
    ])

    const handleDelete = () => {
        notificacionPendiente.map( notif => {
            let checkbox = document.getElementById( notif.checked );

            if ( checkbox.checked ){
                const aux = notificacionPendiente.filter( e => e.checked !== notif.checked )
                setNotificacionPendiente(aux);
                checkbox.checked = false;
            }
        })
    }

    const handleEdit = (id) => {
        const item = notificacionPendiente.find((item) => item.codigoCotizacion === id);
        setEditingId(id);
        setEditFechaGenero(item.fechaGenerado);
        setEditFechaVencimiento(item.fechaVencimiento);
        setEditMonto(item.monto);
      };
    
      const handleSave = (id) => {
        const newData = notificacionPendiente.map((item) => {
          if (item.codigoCotizacion === id) {
            return { 
                ...item, 
                fechaGenerado: editFechaGenero,
                fechaVencimiento: editFechaVencimiento,
                monto: editMonto
            };
          }
          return item;
        });
        setNotificacionPendiente(newData);
        setEditingId(null);
        setEditFechaGenero('');
        setEditFechaVencimiento('');
        setEditMonto('');
      };

  return (
    <div id='containerTables'>
        <div className='containerButtons'>
            <button id='botonProcesar' >{t("cotizacion.botonProcesada")}</button>
            <button id='botonRechazar'>{t("cotizacion.botonRechazada")}</button>
        </div>

        <h1 id="enProceso">{t("cotizacion.pendientes")}</h1>
        <p className='misNotificaciones'>{t("cotizacion.misNotificaciones")}</p>
        <table>
            <tr>
                <th className='border-checkbox' ></th>
                <th>{t("cotizacion.codigoCotizacion")}</th>
                <th>{t("cotizacion.codigoCliente")}</th>
                <th>{t("cotizacion.cliente-empresa")}</th>
                <th>{t("cotizacion.fechaGenero")}</th>
                <th>{t("cotizacion.fechaVencimiento")}</th>
                <th>{t("cotizacion.monto")}</th>
                <th>{t("cotizacion.opciones")}</th>
            </tr>
            {notificacionPendiente.map( notif => 
                <tr key={notif.codigoCotizacion}>
                    <td className='border-checkbox'><input type="checkbox" id={notif.checked}/></td>
                    <td>{notif.codigoCotizacion}</td>
                    <td>{notif.codidoCliente}</td>
                    <td><a href='#'>{notif.cliente}</a></td>
                    <td>
                        {editingId === notif.codigoCotizacion ? (
                            <input
                                type="text"
                                value={editFechaGenero}
                                onChange={(e) => setEditFechaGenero(e.target.value)}
                            />
                            ) : (
                            notif.fechaGenerado
                        )}
                    </td>
                    <td>
                        {editingId === notif.codigoCotizacion ? (
                                <input
                                    type="text"
                                    value={editFechaVencimiento}
                                    onChange={(e) => setEditFechaVencimiento(e.target.value)}
                                />
                                ) : (
                                notif.fechaVencimiento
                        )}
                    </td>
                    <td>
                        {editingId === notif.codigoCotizacion ? (
                                <input
                                    type="text"
                                    value={editMonto}
                                    onChange={(e) => setEditMonto(e.target.value)}
                                />
                                ) : (
                                notif.monto
                        )}
                    </td>
                    <td>

                        {editingId === notif.codigoCotizacion ? (
                            <button
                                className='buttonIcon'
                                onClick={() => handleSave(notif.codigoCotizacion)} >
                                    <BsFillPencilFill
                                        style={{fontSize: "1.3rem"}}
                                    />
                            </button>
                            ) : (
                                <button
                                    className='buttonIcon'
                                    onClick={() => handleEdit(notif.codigoCotizacion)} >
                                        <BsFillPencilFill
                                            style={{fontSize: "1.3rem"}}
                                        />
                                </button>
                        )}

                        <button
                            className='buttonIcon'
                            onClick={() => handleDelete()}>
                                <BsFillXCircleFill
                                    style={{fontSize: "1.3rem"}}
                                />
                        </button>
                    </td>
                </tr>
                )
            }
        </table>
    </div>
    )
}
