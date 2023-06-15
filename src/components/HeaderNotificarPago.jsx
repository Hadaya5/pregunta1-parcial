import React from 'react';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';  
import '../styles/HeaderNotificarPago.scss';


export const HeaderNotificarPago = ({
    arrayFases,
    funcionAtras,
    funcionContinuar,
    proceso,
    selectItem,
}) => {

    const { t, i18n } = useTranslation();

    return (
        <section className='containerHPrincipalNP'>
            <section className='containerHeaderNP'>
                <img
                    src={logo}
                    style={{width:'4em'}}
                />
                <p>Vivienda xx</p>
                <section>
                    <p>  {t('notPago.notificarPago')}</p>
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
                                        {t(item?.label)}
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
                                    >{t('notPago.atras')}
                                </button>
                            }
                            <section className='containerMedioNP'>
                                <p> {t(selectItem?.texto)}</p>
                            </section>
                            { 
                                proceso === 6 ?
                                <section></section>
                                :
                                <button 
                                    className='bottonOpcionNP' 
                                    onClick={() => funcionContinuar()}
                                    >
                                        {t('notPago.continuar')}
                                    </button>

                            }

                        </section>
                    </>
                    : null
            }

        </section>
    );
};
