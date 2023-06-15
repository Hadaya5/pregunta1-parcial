import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "../styles/ResetPassword.scss"

export const ResetPassword = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

  return (
    <div className='reset-password'>
    <div className='reset'>
        <h2 id='title'>{t('forgotPassword.titulo2')}</h2>

        <form className='form'>

            <p>{t('forgotPassword.descripcion2.4')}<br/>
            <a href="#">nirvana01@gmail.com</a> </p>
            <p>{t('forgotPassword.descripcion2.5')} <span className='simulacion bold'>544922</span></p>
            <p className='bold'>{t('forgotPassword.descripcion2.6')}</p>
            <a href='#' style={{textAlign: "center"}}>{t('forgotPassword.enlace')}</a>

            <div id='buttons'>
                <button type="button" onClick={ () => {navigate("/login")} }>{t('forgotPassword.botonAceptar')}</button>
            </div>

        </form>
    </div>
</div>
  )
}
