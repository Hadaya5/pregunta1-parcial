import React from 'react'
import "../styles/IniciarSesion.scss"
import { useTranslation } from 'react-i18next';  

export const IniciarSesion = () => {

    const { t, i18n } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div id='iniciar-sesion' className='container'>
        <div className='login'>
            <h2 className='title blue'>{t('login.titulo1')}</h2>
            <h2 className='title red' id='notificar'>{t('login.titulo2')}</h2>

            <form onSubmit={handleSubmit} className='form'>

                <div>
                    <div className='field'>
                        <input type="text" required placeholder={t('login.placeholder1')}/>
                    </div>
                    <div className='field'>
                        <input type="password" required placeholder={t('login.placeholder1')} />
                    </div>
                </div>


                <button type="submit">{t('login.boton')}</button>
                <br/>
                <a href="/forgot-password" id="forgot-password">{t('login.olvide_codigo')}</a>

            </form>

            
            
        </div>
    </div>
  )
}
