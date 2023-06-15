import React from 'react'
import '../styles/FormaPago.scss'
import { useTranslation } from 'react-i18next'; 

const openModalWindow = (arr) => {
    const modalWindow = window.open('', 'Modal Window', 'width=471,height=402,left=100,top=100');
    const modalDocument = modalWindow.document;
    // Modify the HTML content of the modal window
    modalDocument.write(`
      <html>
        <head>
          <title>Banesco Panamá</title>
          <style>
            /* Add custom CSS styles for the modal window */
            #content{
                display: flex;
                width: 400px;
                height: 300px;
                font-size: medium;    
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            }

            #blue-box{
                background-color:rgb(0, 176, 240);
                width: 100%;
                color: white;
                text-align: center;
                padding-top: 1vh;
                padding-bottom: 1vh;
                font-weight: bold;
            }

            #right {
                margin-top: 5vh;
                margin-left: 4vw;
            }

            .red{
                color: red;
            }

            div span{
                font-weight: bold;
            }
            
          </style>
        </head>
        <body>
        <div id='blue-box'>Banesco Panamá</div>
        <div id='content'>
            <div>
                <h2 class='red'>${arr[0]}</h2>
                <p>* ${arr[1]}</p>
                <p>* ${arr[2]}</p>
            </div>
            <div id='right'>
                <p><span>${arr[3]}:</span> Banesco Panamá</p>
                <p><span>${arr[4]}:</span> 201800948693</p>
                <p><span>${arr[5]}:</span> BANSPAPA</p>
                <p><span>${arr[6]}:</span> TuVivienda.com</p>
                <p><span>RIF:</span> J-123456789-0</p>
                <p><span>${arr[7]}:</span> nombreEmpresa@gmail.com</p>
            </div>
        </div>
        </body>
      </html>
    `);
  
    // Close the original document to prevent it from rendering in the modal window
    modalDocument.close();
  };


const FormaPago = () => {
    const { t, i18n } = useTranslation();
    
    let arr=[
        t('Forma-pago.forma-pago'),
        t('Forma-pago.deposito'),
        t('Forma-pago.transferencia'),
        t('Forma-pago.banco'),
        t('Forma-pago.nro-cuenta'),
        t('Forma-pago.codigo-swift'),
        t('Forma-pago.nombre-de'),
        t('Forma-pago.correo'),
    ]

    return ( 
    <div id="forma-pago">
        <div id='head'>
            <img src="https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png" alt="" />
            <h2 className='yellow'>{t('Forma-pago.vivienda')} XX </h2>
            <a href="">{t('Forma-pago.ref')}</a>
        </div>
        <div id='body'>
            <div ><h2>{t('Forma-pago.forma-pago')}</h2></div>
            <div className='sangria'><h3 className='blue'>{t('Forma-pago.metodo-pago')}</h3></div>
            <div className='sangria'>{t('Forma-pago.mensaje')}</div>
            <div className='sangria'>
                <button onClick={() => openModalWindow(arr)}><img src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png" alt="" /></button><span>Banesco Panamá - {t('Forma-pago.nro-cuenta')}: 201800948693 – {t('Forma-pago.codigo-swift')}: BANSPAPA</span>
            </div>
        </div>

        {/*<div id='prueba'>
            <div id='blue-box'>Banesco Panamá</div>
            <div id='content'>
                <div>
                    <h2 className='red'>Formas de Pago</h2>
                    <p>* Depósito</p>
                    <p>* Transferencia Bancaria</p>
                </div>
                <div id='right'>
                    <p><span>Banco:</span> Banesco Panamá</p>
                    <p><span>Nro de Cuenta:</span> 201800948693</p>
                    <p><span>Código SWIFT:</span> BANSPAPA</p>
                    <p><span>A nombre de:</span> TuVivienda.com</p>
                    <p><span>RIF:</span> J-123456789-0</p>
                    <p><span>Email:</span> nombreEmpresa@gmail.com</p>
                </div>
            </div>
        </div>
    */}
    </div>
    );
}
 
export default FormaPago;