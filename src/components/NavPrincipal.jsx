import React, { useState } from 'react';
import {NavBar, NavMenu} from './Nav';
import '../styles/NavPrincipal.scss';

export const NavPrincipal = (props) => {

    console.log("props props ", props);

    return (
        <section className='containerMain'>
            <NavBar />

    
            <section className='containerSegundario'>
                
                <NavMenu cerrarSesion={props.cerrarSesion}/>

                <section className='containerHijo'>
                    {props.children}
                </section>
                
            </section>

        </section>
    )
}
