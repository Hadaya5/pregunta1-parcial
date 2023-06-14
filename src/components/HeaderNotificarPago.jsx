import React from 'react';
import logo from '../assets/logo.png'
import '../styles/HeaderNotificarPago.scss';


export const HeaderNotificarPago = ({
    arrayFases,
    funcionAtras,
    funcionContinuar,
    proceso,
    selectItem,
}) => {

    return (
        <section className='containerHPrincipalNP'>
            <section className='containerHeaderNP'>
                <img
                    src={logo}
                    style={{width:'4em'}}
                />
                <p>Vivienda xx</p>
                <section>
                    <p> Notifiar Pago</p>
                </section>
            </section>
                {
                    arrayFases.length ? 
                    <>
                        <section className='containerMainNP'>
                            {
                                arrayFases.map((item, index) => (
                                    <section key={`fase-000-${index}`} className={item?.activo ? 'containerBottonNPActivo' :'containerBottonNPInactivo' }>
                                    <p>
                                            {item?.label}
                                    </p>
                                    </section>
                                ))

                            }
                        </section>
                        <section className='containerFooterNP'>
                            {
                                proceso ===1  ?
                                    <section></section>
                                :
                                <button 
                                    className='bottonOpcionNP'
                                    onClick={() => funcionAtras()}
                                    >Atras
                                </button>
                            }
                            <section className='containerMedioNP'>
                                <p> {selectItem?.texto}</p>
                            </section>
                            { 
                                proceso === 6 ?
                                <section></section>
                                :
                                <button 
                                    className='bottonOpcionNP' 
                                    onClick={() => funcionContinuar()}
                                    >
                                        Continuar
                                    </button>

                            }

                        </section>
                    </>
                    : null
            }

        </section>
    );
};
