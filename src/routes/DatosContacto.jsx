import React, { useState } from 'react';
import { ReactComponent as LogoM } from '../assets/envelope.svg';
import { ReactComponent as LogoMovil } from '../assets/phone.svg';
import { ReactComponent as LogoFijo } from '../assets/telephone-fill.svg';
import '../styles/DatosContacto.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useTranslation } from 'react-i18next'; 
import logo from '../assets/logo.png';



export const DatosContacto = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [validador, setValidador] = useState(false);
  const [activado, setActivado] = useState(true);
  const [datos, setDatos] = useState([
    { columna1: 'Movil', columna2: '0414-389-74-44' },
    { columna1: 'Movil', columna2: '0414-389-74-44'}
  ]);
  const [nuevoDato, setNuevoDato] = useState('');
  const [icono, setIconM] = useState(false);
  const [iconof, setIconoFijo] = useState(false);
  const [iconom, setIconMo] = useState(false);


  const { t } = useTranslation();

  function darFormatoNumero(numero) {
    return numero.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4");
  }

  const agregarFila = () => {
  let valor;
  let prueba;
  
    if (validador === true){
      if (selectedOption == 'Telefono Movil..'){
        valor = 'Movil';
        prueba = darFormatoNumero(nuevoDato);
      }else if (selectedOption == 'Telefono Fijo..'){
        valor = 'Fijo';
        prueba = darFormatoNumero(nuevoDato);
      }else {
        valor = 'email';
        prueba = nuevoDato;
      }
    const nuevaFila = { columna1: valor, columna2: prueba };
    setDatos([...datos, nuevaFila]);
    setNuevoDato('');
    setValidador(true);
    setActivado(true);
  }
  };

  const handleModificar = (index) => {
    // Lógica para modificar la fila en el índice dado
    console.log('Modificar fila en índice:', index);
  };

  const validarFormato = () => {
    const formatoNumeroTelefonico = /^\d{10}$/;
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (formatoNumeroTelefonico.test(nuevoDato) && selectedOption != 'Email' && selectedOption != '' ) 
      setActivado(false);
    else if (formatoCorreo.test(nuevoDato) && selectedOption === 'Email' )
      setActivado(false);
    else
      setActivado(true);
  };


  const handleEliminar = (index) => {
    setDatos((datos) => {
      const nuevosDatos = [...datos];
      nuevosDatos.splice(index, 1); // Elimina la fila correspondiente al índice
      console.log(nuevosDatos);
      return nuevosDatos;
    });
    console.log('Eliminar fila en índice:', index);
  };


  let textFieldValue = '';

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setNuevoDato(event.target.value);
    if (event.target.value === 'Telefono Movil..'){
      setIconMo(true); setIconM(false); setIconoFijo(false);
    }else if (event.target.value === 'Telefono Fijo..'){
      setIconoFijo(true); 
      setIconMo(false);
      setIconM(false); 
      
    }else if (event.target.value == 'Email'){
      setIconMo(false);setIconM(true); setIconoFijo(false);
    }else {  
        setIconMo(false);setIconM(false); setIconoFijo(false);
    }
    
    

  };
  
  
  if (selectedOption === 'Telefono Movil') {
   
    textFieldValue = 'Telefono Movil..';
  } else if (selectedOption === 'option2') {
 
    textFieldValue = 'Telefono Fijo..';
  } else if (selectedOption === 'option3') {

    textFieldValue = 'Email';
  }

  return (
    <section className='containerHPrincipalNP'>
      <section className='containerHeaderNP'>
        <img
            src={logo}
            style={{width:'4em'}}
        />
        <p>Vivienda xx</p>
        <div id="header">
                <h2>
                    <a href="">{t("contacto.click_info_vivienda")}</a>
                </h2> 
            </div>
        
        </section>
        
     <div id='containerCEO'>  
    <div id='containerTables'>
    <h1>Datos de Contacto</h1>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Accion</th>
          </tr>
        </thead>
      <tbody>
          {datos.map((fila, index) => (
            <tr key={index}>
              <td>{fila.columna1}</td>
              <td>{fila.columna2}</td>
              <td>
                <button className='botonEliminar'  onClick={() => handleEliminar(index)}>Eliminar</button>
                <button className='botonModificar' onClick={() => handleModificar(index)}>Modificar</button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
            <h1>Agregar otros datos de Contacto</h1>
      <select value={selectedOption} onChange={handleOptionChange} id='select'>
        <option value="">Agregar Registro</option>
        <option value="Telefono Movil..">Telefono Movil</option>
        <option value="Telefono Fijo..">Telefono Fijo</option>
        <option value="Email">Email</option>
      </select>
      


      <div className="input-container">
      {icono && <LogoM className="input-icon" />}
      {iconof && <LogoFijo className="input-icon"/>} 
      {iconom && <LogoMovil className="input-icon"/>}  
        


      <input  className="input-field"
          type="text"
          value={nuevoDato}
          onChange={(e) => {setNuevoDato(e.target.value); validarFormato(); setValidador(true);}}
          onClick={(e) =>  {setNuevoDato('')}}
        />
        </div>
        <button className='botonActualizar' onClick={() => agregarFila()} disabled= {activado} >Actualizar</button> 
      </div>
      </div>
    </section>
  );
};

