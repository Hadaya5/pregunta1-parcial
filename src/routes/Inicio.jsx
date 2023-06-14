import React, { useState } from 'react'
import '../styles/Inicio.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export const Inicio = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='Inicio'>
        
        <div className='columna1'>
            <h3 id='title'>Vivienda XXX</h3>
            <h4 id='box1'>Notificación y proceso de pago</h4>
            <p>Estimado cliente<br/>Para agilizar el proceso de pagos de las viviendas, u otros servicios ofrecidos por la empresa, puede realizarlo en el portal <a href="#">www.notificarPagoVivienda.com</a></p>
            <br/>
            <p>Le invitamos a ver el video que le ilustra, como realizar la notificación de su pago, vía Web; y la forma de obtener su comprobante de pago</p>

            <div>
                <h3 id='boxVideo'>COLOQUE AQUÍ EL VIDEO QUE MUESTRA LAS INSTRUCCIONES</h3>
            </div>

        </div>

        <div className='columna2'>
            <h4 className='titleTable'>DATOS DE LA VIVIENDA</h4>

            <div className='container1'>
                <div className='subcolumna1 bold'>
                    <p>País</p>
                    <p>Estado</p>
                    <p>Ciudad</p>
                    <p>Zona</p>
                    <p>Descripción</p>
                    <p>Fecha publicación</p>
                    <p>Fecha vencimiento</p>
                    <p>País de procedencia</p>
                    <p>Tipo de publicación</p>
                    <p>Idioma de la publicación</p>
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
                <span className='box2'>Precio</span>
                <span className='box2'>30 USD</span>
            </div>

            <h3 style={{textAlign: "center"}}>
                <span className='red'>Código de cliente: </span>xxxxxx
            </h3>

            <div id='center-button'>
                <button>Notificar pago</button>
            </div>
           
            <Popup id='popup-hola' open={isOpen} onClose={() => setIsOpen(false)} >
                <div id='popup-container'>
                <div className="header">Descripción de la vivienda</div>
                    <p className='modal'>Esta propiedad cuenta con una amplia sala de estar con grandes ventanales que permiten la entrada de mucha luz natural y una hermosa vista al jardín. La cocina es moderna y está totalmente equipada con electrodomésticos de alta calidad, lo que la convierte en un lugar ideal para preparar deliciosas comidas.</p>
                    <div>
                        <button id="boton-aceptar">Aceptar</button>
                    </div>
                </div>
            </Popup>

        </div>
    </div>
  )
}
