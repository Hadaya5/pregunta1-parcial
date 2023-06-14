import React from 'react';
import logo from '../assets/logo.png'
import '../styles/HeaderNotificarPago.scss';


export const HeaderNotificarPago = ({
    arrayFases
}) => {
    return (
        <section className='containerHPrincipal'>
            <section className='containerHeader'>
                <img
                    src={logo}
                />
                <p>Vivienda xx</p>
            </section>
            <section className='containerMain'>
                {
                    arrayFases.map(item => (
                        <section className='containerBotton'>
                            "pago x"
                        </section>
                    ))
                }

            </section>
            <section className='containerFooter'>
                <button className='bottonOpcion'>Atras</button>
                <section className='containerMedio'>
                    <p> texto texto texto texto</p>
                </section>
                <button bottonOpcion>Continuar</button>

            </section>
        </section>
    );
};
