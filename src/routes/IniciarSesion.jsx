import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';  
import "../styles/IniciarSesion.scss"

export const IniciarSesion = () => {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        i18n.changeLanguage( language );
    }

  return (
    <div id='iniciar-sesion' className='container'>
        <div id='login'>
            <h2 className='title blue'>{t('login.titulo1')}</h2>
            <h2 className='title red' id='notificar'>{t('login.titulo2')}</h2>

            <form onSubmit={handleSubmit} className='form'>

                <div>
                    <div className='field'>
                        <input type="text" required placeholder={t('login.placeholder1')}/>
                    </div>

                    <select id="language" name="language" className='field' value={language} onChange={ e => setLanguage(e.target.value) }>
                        <option value="" disabled selected>{t('login.placeholder2')}</option>
                        <option value="en">Inglés</option>
                        <option value="es">Español</option>
                    </select>
                </div>

                <button type="submit">{t('login.boton')}</button>
                <br/>
                <a href="/forgot-password">{t('login.olvide_codigo')}</a>

            </form>

            
            
        </div>
    </div>
  )
}
