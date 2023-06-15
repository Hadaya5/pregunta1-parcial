import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const FormForgotPassword = ({ message, info }) => {

    const [correoEnviado, setCorreoEnviado] = useState(false)
    const [userMail, setUserMail] = useState("correoDeLapersonaQueRecibeCorreo@xxxx.com");
    const [phone, setPhone] = useState(false);
    const [input, setInput] = useState('');
    const [otherInput, setOtherInput] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false)
    const { t } = useTranslation();
    const navigate = useNavigate();
    const inputElement = useRef();


    const handleSubmit  = (e) =>  {
        e.preventDefault();
        setCorreoEnviado(true);
        setOtherInput(true);

        if(info==="phone"){    
            setPhone(true);
            setOtherInput(false);
        }
        
        inputElement.current.value = '';
    }

    const handleSendEmail = e => {
        e.preventDefault();

    }

    return (

        <>
            { correoEnviado && !phone?
                <div id='forgot'>
                    <h2 id='title'>{t('forgotPassword.titulo1')}</h2>

                    <form onSubmit={ handleSendEmail } className='form'>
                        <p id="message">{t('forgotPassword.descripcion2.1')} <br/>
                            <a className='simulacion' href="#">{ userMail }</a><br/>
                            <br/>
                            <span className='bold'>{t('forgotPassword.descripcion2.2')}</span><span className='simulacion'>+58 414-2456378</span>
                            <br/>
                            <br/>
                            <span id="text">{t('forgotPassword.descripcion2.3')}</span>
                        </p>

                        <div id="buttons">
                            <button type="submit" onClick={() => navigate("/reset-password")}>{t('forgotPassword.botonAceptar')}</button>
                            <button type="button" onClick={() => navigate("/login")}>{t('forgotPassword.botonCancelar')}</button>
                        </div>
                    </form>
                </div>
            :
                
            !correoEnviado && !phone ?

                <div id='forgot'>
                    <h2 id='title'>{t('forgotPassword.titulo1')}</h2>

                    <form onSubmit={ handleSubmit } className='form'>
                        <p>{ message }</p>
                        <div id='input-forgot-password'>
                            <input type="text" ref={inputElement}/>
                        </div>

                        <div id="buttons">
                            <button type="submit">{t('forgotPassword.botonAceptar')}</button>
                            <button type="button" onClick={() => navigate("/login")}>{t('forgotPassword.botonCancelar')}</button>
                        </div>
                    </form>
                </div>

                :

                <div id='forgot'>
                    <h2 id='title'>{t('forgotPassword.titulo1')}</h2>

                    <form className='form'>
                        <p>{t('forgotPassword.mensaje4')}</p>
                        <div id='input-forgot-password'>
                            <input type="text"  />
                        </div>

                        <div id="buttons">
                            <button 
                                type="button" 
                                onClick={() => navigate("/reset-password")} 
                                style={{width: "40%"}}
                            >
                                {t('forgotPassword.botonProcesar')}
                            </button>
                        </div>
                    </form>
                </div>
  
            }

            

        </>
  )
}
