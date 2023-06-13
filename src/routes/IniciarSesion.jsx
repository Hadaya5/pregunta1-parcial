import React from 'react'
import "../styles/IniciarSesion.scss"
import { useTranslation } from 'react-i18next';  
import { useNavigate } from 'react-router-dom';



export const IniciarSesion = () => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
       // e.preventDefault()
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        if (username && password) {
            // Ambos campos tienen contenido, enviar formulario
            console.log("Enviando formulario");
            // Actualizar un valor en localStorage
            const token = "12334545";
            localStorage.setItem('token', token);
            navigate('/inicio');
            return;
        }
    }




  return (
    <div id='iniciar-sesion' className='container'>
        <div className='login'>
            <h2 className='title blue'>{t('login.titulo1')}</h2>
            <h2 className='title red' id='notificar'>{t('login.titulo2')}</h2>

            <form onSubmit={handleSubmit} className='form'>

                <div>
                    <div className='field'>
                        <input type="text" name="username" required placeholder={t('login.placeholder1')}/>
                    </div>
                    <div className='field'>
                        <input type="password" name="password" required placeholder={t('login.placeholder1')} />
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
