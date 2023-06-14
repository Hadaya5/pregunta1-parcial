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
            <section>
                {
                    arrayFases.map(item => (
                        <section>
                            "pago x"
                        </section>
                    ))
                }

            </section>
            <section>
                <button>Atras</button>
                <section>
                    <p> texto texto texto texto</p>
                </section>
                <button>Continuar</button>

            </section>
        </section>
    );
};
