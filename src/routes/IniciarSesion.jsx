import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next';  
import "../styles/IniciarSesion.scss"
import { useNavigate } from 'react-router-dom';
import users from "../data/users.json"
import AuthContext from '../context/AuthContext';

export const IniciarSesion = () => {

    const { t, i18n } = useTranslation();
    const {authState, setAuthState} = useContext(AuthContext);
    const [language, setLanguage] = useState('')
    const navigate = useNavigate();

    const usuarios = users.users;


    const handleSubmit = (e) => {
        i18n.changeLanguage( language );
        
        const code = e.target.elements.code.value;

        /*for(let i=0; i < usuarios.length; i++){
            if(code == usuarios[i].code){
                setAuthState(
                    () => {
                        return {
                            logged_in: true,
                            code: code,
                            type: usuarios[i].type,
                            name: usuarios[i].name,
                            email: usuarios[i].email
                        }
                    }
                )
            }
        }*/

       if (code) {
            console.log("Enviando formulario");
            // Actualizar un valor en localStorage
            const token = code;
            localStorage.setItem('token', token);
            localStorage.setItem('language', language);
            navigate('/inicio');
            return;
        }
        
    }

    return (
        <div id='iniciar-sesion' className='container'>
            
            <div id='login'>
                <h2 className='title blue'>{t('login.titulo1')}</h2>
                <h2 className='title red' id='notificar'>{t('login.titulo2')}</h2>
    
                <form onSubmit={handleSubmit} className='form'>
    
                    <div>
                        <div className='field'>
                            <input type="text" name="code" required placeholder={t('login.placeholder1')}/>
                        </div>
                        <select id="language" name="language" className='field' value={language} required onChange={ e => setLanguage(e.target.value) }>
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

