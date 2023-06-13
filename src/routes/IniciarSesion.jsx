import React from 'react'
import "../styles/IniciarSesion.scss"

export const IniciarSesion = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div id='iniciar-sesion' className='container'>
        <div className='login'>
            <h2 className='title blue'>TuVivienda.com</h2>
            <h2 className='title red' id='notificar'>Notificar pagos</h2>

            <form onSubmit={handleSubmit} className='form'>

                <div>
                    <div className='field'>
                        <input type="text" required placeholder='Introduzca su código de cliente'/>
                    </div>
                    <div className='field'>
                        <input type="password" required placeholder='Seleccione el idioma de su preferencia' />
                    </div>
                </div>


                <button type="submit">Ingresar</button>
                <br/>
                <a href="/forgot-password" id="forgot-password">Olvidé mi código de cliente</a>

            </form>
            
        </div>
    </div>
  )
}
