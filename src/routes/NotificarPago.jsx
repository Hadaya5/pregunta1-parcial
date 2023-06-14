import React from 'react';
import {HeaderNotificarPago} from '../components/HeaderNotificarPago';

const arrayFases = [1,2,3,4,5,6];

const NotificarPago = () => {
    return (
        <div style={{width: '100%', height:"100%"}}>
            <HeaderNotificarPago
                arrayFases={arrayFases}
            />
            {
                <section>
                    terminar las validaciones
                </section>
            }
        </div>
    );
};

export default NotificarPago;