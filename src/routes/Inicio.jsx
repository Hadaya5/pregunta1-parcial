import React, { useState } from 'react'
import '../styles/Inicio.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useTranslation } from 'react-i18next'; 

export const Inicio = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)

  return (
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
                    <p className='simulacion'>Inglés</p>
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
  )
}
