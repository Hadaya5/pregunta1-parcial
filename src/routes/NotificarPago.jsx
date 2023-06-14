import React, { useEffect, useState, useRef } from "react";
import { HeaderNotificarPago } from "../components/HeaderNotificarPago";
import "../styles/NotificarPago.scss";

const arrayFases = [
    {
        label: "Cantidad de depósitos",
        activo: true,
        validacion: false,
        opcion: 1,
        texto: "1- ¿Cuántos depósitos y/o transferencias tiene para notificar?",
    },
    {
        label: "Tipo de Operacion",
        activo: false,
        validacion: false,
        opcion: 2,
        texto: "Seleccione la forma en que fue cancelado el adiestramiento, o el servicio ofrecido",
    },
    {
        label: "Datos de la transferencia /depósito",
        activo: false,
        validacion: false,
        opcion: 3,
        texto: "Datos de la transferencia/depósito",
    },
    {
        label: "Datos de usuario",
        activo: false,
        validacion: false,
        opcion: 4,
        texto: "Datos del usuario",
        textoEmpresa: "Datos de la empresa y su representante",
    },
    {
        label: "Datos del adiestramiento",
        activo: false,
        validacion: false,
        opcion: 5,
        texto: "Datos de la vivienda",
    },
    {
        label: "Recibo",
        activo: false,
        validacion: false,
        opcion: 6,
        texto: "Verifique sus datos antes de continuar",
    },
];

export const Fase01 = ({
    selectItem,
    setSelectItem,
    opciones,
    setOpciones,
}) => {
    const proceso = 2;
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event?.target?.value);
    };

    useEffect(() => {
        //console.log("selectedOption selectedOption", selectedOption === "1" && item?.opcion === proceso);
        if (selectedOption && selectedOption === "1") {
            const newArray = opciones.map((item) => {
                if (item.opcion === 1) {
                    setSelectItem({
                        ...item,
                        validacion: true,
                    });
                    return {
                        ...item,
                        validacion: true,
                    };
                }
                return item;
            });
            setOpciones(newArray);

            return;
        }

        console.log(
            "selectedOption selectedOption fuera del if",
            selectedOption
        );

        const newArray = opciones.map((item) => {
            if (item.opcion === 1) {
                setSelectItem({
                    ...item,
                    validacion: false,
                });
                return {
                    ...item,
                    validacion: false,
                };
            }
            return item;
        });

        setOpciones(newArray);
        return;
    }, [selectedOption]);

    return (
        <section className="containerFase01">
            <select
                className="selectFase01"
                id="numbers"
                value={selectedOption}
                onChange={handleChange}
            >
                <option value="">Seleccione un número</option>
                {[...Array(10)].map((x, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
        </section>
    );
};

export const Fase02 = ({
    selectItem,
    setSelectItem,
    opciones,
    setOpciones,
}) => {
    const proceso = 2;
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        console.log("event?.target?.value ", event?.target?.value);
        setSelectedOption(event?.target?.value);
    };

    useEffect(() => {
        //console.log("selectedOption selectedOption", selectedOption === "1" && item?.opcion === proceso);
        if (selectedOption) {
            const newArray = opciones.map((item) => {
                if (item.opcion === 2) {
                    setSelectItem({
                        ...item,
                        validacion: true,
                    });
                    return {
                        ...item,
                        validacion: true,
                    };
                }
                return item;
            });
            setOpciones(newArray);

            return;
        }

        console.log(
            "selectedOption selectedOption fuera del if",
            selectedOption
        );

        const newArray = opciones.map((item) => {
            if (item.opcion === 2) {
                setSelectItem({
                    ...item,
                    validacion: false,
                });
                return {
                    ...item,
                    validacion: false,
                };
            }
            return item;
        });

        setOpciones(newArray);
        return;
    }, [selectedOption]);

    return (
        <section className="containerFase01">
            <select
                className="selectFase01"
                id="numbers"
                value={selectedOption}
                onChange={handleChange}
            >
                <option value="">Seleccione un Forma</option>
                {[
                    { label: "Deposito", value: "deposito" },
                    { label: "Transferencia", value: "transferencia" },
                ].map((x, i) => (
                    <option key={i + 1} value={x?.value}>
                        {x?.label}
                    </option>
                ))}
            </select>
        </section>
    );
};

// export const Fase03 = () => {
//     return(
//         <section className="containerFase01">
//             <form className="formFase03">
//                 <section className="containerRowForm">
//                     <label> Monto</label>
//                     <input type="text"/>
//                 </section>
//                 <section className="containerRowForm">
//                     <label>Mondeda</label>
//                     <input type="text"/>
//                 </section>
//                 <section className="containerRowForm">
//                     <label>Banco de origin</label>
//                     <input type="text"/>
//                 </section>
//                 <section className="containerRowForm">
//                     <label>País donde reside la cuenta del banco origen</label>
//                     <input type="text"/>
//                 </section>
//                 <section className="containerRowForm">
//                     <label>Banco destino</label>
//                     <input type="text"/>
//                 </section>
//                 <section className="containerRowForm">
//                     <label>Fecha en que se hizo el depósito</label>
//                     <input type="date"/>
//                 </section>
//                 <section className="containerRowForm">
//                     <label>Número de transferencia</label>
//                     <input type="text"/>
//                 </section>
//             </form>

//         </section>
//     )
// };

//   const isFormComplete = () => {
//     if (!monto || !moneda || !bancoOrigin || !paisCuentaBancoOrigin || !bancoDestino || !fechaDeposito || !numTransferencia) {
//       return false;
//     }
//     return true;
//   };

export const Fase03 = ({ onSubmit, botonEnviarRef }) => {
    const [formulario, setFormulario] = useState({});

    const manejadorSubmit = (evento) => {
        evento.preventDefault();
        console.log("en re adkfhe mebfkwejg", formulario);
        const {
            monto,
            bancoOrigen,
            paisCuentaBancoOrigen,
            bancoDestino,
            fechaDeposito,
            numTransferencia,
            moneda
        } = formulario;

        if (
            !monto ||
            !moneda ||
            !bancoOrigen ||
            !paisCuentaBancoOrigen ||
            !bancoDestino ||
            !fechaDeposito ||
            !numTransferencia
        ) {
            onSubmit({
                proceso: 3,
                formularioCompletado :false
            });
            return;
        }
        onSubmit(onSubmit({
            proceso: 3,
            formularioCompletado:true
        }));

        return;
    };
    const manejarChange = (evento) => {
        const { name, value } = evento.target;
        // console.log("manejar change",evento.target)
        setFormulario({
            ...formulario,
            [name]: value,
        });
    };

    return (
        <section className="containerFase01">
            <form className="formFase03" onSubmit={manejadorSubmit}>
                <section className="containerRowForm">
                    <label> Monto </label>
                    <input
                        type="text"
                        name="monto"
                        value={formulario.monto}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>Mondeda </label>
                    <input
                        type="text"
                        name="moneda"
                        value={formulario.moneda}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>Banco de origen </label>
                    <input
                        type="text"
                        name="bancoOrigen"
                        value={formulario.bancoOrigen}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>
                        País donde reside la cuenta del banco origen 
                    </label>
                    <input
                        type="text"
                        name="paisCuentaBancoOrigen"
                        value={formulario.paisCuentaBancoOrigen}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>Banco destino </label>
                    <input
                        type="text"
                        name="bancoDestino"
                        value={formulario.bancoDestino}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>Fecha en que se hizo el depósito </label>
                    <input
                        type="date"
                        name="fechaDeposito"
                        value={formulario.fechaDeposito}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>Número de transferencia </label>
                    <input
                        type="text"
                        name="numTransferencia"
                        value={formulario.numTransferencia}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <button
                    style={{ display: "none" }}
                    type="submit"
                    ref={botonEnviarRef}
                >
                    Enviar
                </button>
            </form>
        </section>
    );
};

export const NotificarPago = () => {
    const [selectItem, setSelectItem] = useState({});
    const [opciones, setOpciones] = useState(arrayFases);
    const [proceso, setProceso] = useState(1);

    const [formularioCompletado01, serFormularioCompletado01] = useState(false);
    
    const botonEnviarRef = useRef();

    const manejadorFormulario = (formulario) => {
        console.log("formulario ###########", formulario);

        if(formulario){

            const {proceso,formularioCompletado } = formulario;
            
            if(formularioCompletado){
                const newArray = opciones.map((item) => {
                    if (item.opcion === proceso) {
                        setSelectItem(item);
                        return {
                            ...item,
                            validacion: true,
                        };
                        
                    }
                    return item;
                });
                setOpciones(newArray);
                return;
            }
    
            const newArray = opciones.map((item) => {
                if (item.opcion === proceso) {
                    return {
                        ...item,
                        validacion: false,
                    };
                }
                return item;
            });
            setOpciones(newArray);
            return;
        }

    };

    const funcionAtras = () => {
        // if(selectItem.validacion){
        if (proceso > 1) {
            const newArray = opciones.map((item) => {
                if (item.opcion === proceso) {
                    return {
                        ...item,
                        validacion: false,
                        activo: false,
                    };
                }
                return item;
            });

            setOpciones(newArray);

            setProceso(proceso - 1);
        }

        // }
    };

    const funcionContinuar = () => {
        console.log("funcion continuar proceso actual", proceso);

        if (proceso === 3) {
            botonEnviarRef?.current?.click();
            return;
        }

        if (selectItem?.validacion) {
            const newArray = opciones.map((item) => {
                if (item.opcion === proceso + 1) {
                    setProceso(proceso + 1);
                    setSelectItem(item);

                    return {
                        ...item,
                        activo: true,
                    };
                }
                return item;
            });

            console.log(newArray);
            setOpciones(newArray);
        }
        return;
    };

    useEffect(() => {
        if (selectItem?.validacion && selectItem.opcion ===3) {
            const newArray = opciones.map((item) => {
                if (item.opcion === proceso + 1) {
                    setProceso(proceso + 1);
                    setSelectItem(item);

                    return {
                        ...item,
                        activo: true,
                    };
                }
                return item;
            });

            console.log(newArray);
            setOpciones(newArray);
        }
    }, [selectItem]);

    useEffect(() => {
        if (opciones && opciones.length) {
            const procesoFind = opciones.find((fase) => fase?.opcion === 1);

            setSelectItem(procesoFind);
        }
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateRows: "40% 60%",
            }}
        >
            <HeaderNotificarPago
                arrayFases={opciones}
                funcionAtras={funcionAtras}
                funcionContinuar={funcionContinuar}
                proceso={proceso}
                selectItem={selectItem}
            />
            <>
                {proceso === 1 ? (
                    <Fase01
                        selectItem={selectItem}
                        setSelectItem={setSelectItem}
                        opciones={opciones}
                        setOpciones={setOpciones}
                    />
                ) : proceso === 2 ? (
                    <Fase02
                        selectItem={selectItem}
                        setSelectItem={setSelectItem}
                        opciones={opciones}
                        setOpciones={setOpciones}
                    />
                ) : proceso === 3 ? (
                    <Fase03
                        selectItem={selectItem}
                        setSelectItem={setSelectItem}
                        opciones={opciones}
                        setOpciones={setOpciones}
                        onSubmit={manejadorFormulario}
                        botonEnviarRef={botonEnviarRef}
                    />
                ) : proceso === 4 ? (
                    <Fase04 />
                ) : proceso === 5 ? (
                    <Fase05 />
                ) : proceso === 6 ? (
                    <Fase06 />
                ) : null}
            </>
        </div>
    );
};

export const Fase04 = () => {};
export const Fase05 = () => {};
export const Fase06 = () => {};
