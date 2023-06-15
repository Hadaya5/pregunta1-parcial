import React from "react"
import { useTranslation } from 'react-i18next'; 

import "../styles/Contacto.scss"

export const Contacto = () => {

    const { t } = useTranslation();
    
    return <>
        <div id="contacto">
            <div id="header">
                <h2>
                    {t("contacto.vivienda")}
                    <a href="">{t("contacto.click_info_vivienda")}</a>
                </h2> 
            </div>
            <div className="container">
                <div className="info">

                    <div id="telefonos">
                        {t("contacto.telefonos")}
                        <ul>
                            <li>+58 (0212)-362-82-68</li>
                            <li>+58+0414-389-74-44</li>
                        </ul>
                    </div>

                    <div id="atencion">
                        {t("contacto.atencion")}
                        <ul>
                            <li>{t("contacto.lunes_viernes")}: {t("contacto.horario")}</li>
                            <li>{t("contacto.sabados_domingos")}: {t("contacto.horario")}</li>
                        </ul>
                    </div>

                    <div id="email">
                        {t("contacto.correo")}
                        <ul>
                            <li>{t("contacto.envia_correo")}</li>
                            <li>nirvana01@gmail.com</li>
                        </ul>
                        
                    </div>

                    <div id="link-container">
                        {t("contacto.enlaces_interes")}
                        <ul>
                            <li>
                                <a href=""> {t("contacto.preguntas")} </a>
                            </li>
                            <li>
                                <a href=""> {t("contacto.terminos")} </a>
                            </li>
                        </ul>
                    </div>

                    <div id="social-media">
                        {t("contacto.siguenos")}  
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
                    <form action="">
                        <h3>{t("contacto.formulario")}</h3>
                        <input placeholder={t("contacto.para")} type="text" name="" id="" />
                        <input placeholder={t("contacto.nombre")} type="text" name="" id="" />
                        <input placeholder={t("contacto.asunto")} type="text" name="" id="" />
                        <button>{t("contacto.enviar")}</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}