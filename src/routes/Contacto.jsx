import React from "react"
import { useTranslation } from 'react-i18next'; 

import "../styles/Contacto.scss"

export const Contacto = () => {

    const handleSubmit = (e) => {
        console.log(e);
    };

    const { t } = useTranslation();
    
    return <>
        <div id="contacto">
            <div id="header">
                <h2>
                    {t("contacto.vivienda")+" "}
                    <a href="">{t("contacto.click_info_vivienda")}</a>
                </h2> 
            </div>
            <div className="container">
                <div className="info">

                    <div className="info-field" id="telefonos">
                        <span>
                            {t("contacto.telefonos")}
                        </span>
                        <ul>
                            <li>+58 (0212)-362-82-68</li>
                            <li>+58 0414-389-74-44</li>
                        </ul>
                    </div>

                    <div className="info-field" id="atencion">
                        <span>
                            {t("contacto.atencion")}
                        </span>
                        <ul>
                            <li><span>{t("contacto.lunes_viernes")}:</span> {t("contacto.horario")}</li>
                            <li><span>{t("contacto.sabados_domingos")}:</span> {t("contacto.horario")}</li>
                        </ul>
                    </div>

                    <div className="info-field" id="email">
                        <span>
                            {t("contacto.correo")}
                        </span>
                        <ul>
                            <li>{t("contacto.envia_correo")}</li>
                            <li>nirvana01@gmail.com</li>
                        </ul>
                        
                    </div>

                    <div className="info-field" id="link-container">
                        <span>
                            {t("contacto.enlaces_interes")}
                        </span>
                        <ul>
                            <li>
                                <a href=""> {t("contacto.preguntas")} </a>
                            </li>
                            <li>
                                <a href=""> {t("contacto.terminos")} </a>
                            </li>
                        </ul>
                    </div>

                    <div className="info-field" id="social-media">
                        <span>
                            {t("contacto.siguenos")}  
                        </span>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Youtube</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>                      
                    </div>

                </div>
                <div className="form-container">
                    <div className="faq">
                        {t('contacto.preguntas')}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <h3>{t("contacto.formulario")}</h3>
                        <input required placeholder={t("contacto.para")} type="text" name="" id="" />    <br/>
                        <input required placeholder={t("contacto.nombre")} type="text" name="" id="" />  <br/>
                        <input required placeholder={t("contacto.asunto")} type="text" name="" id="" />  <br/>
                        <button>{t("contacto.enviar")}</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}