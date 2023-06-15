import React, { useEffect, useState, useRef } from "react";
import { HeaderNotificarPago } from "../components/HeaderNotificarPago";
import { useTranslation } from "react-i18next";
import "../styles/NotificarPago.scss";

// const arrayFases = [
//     {
//         label: "Cantidad de depósitos",
//         activo: true,
//         validacion: false,
//         opcion: 1,
//         texto: "1- ¿Cuántos depósitos y/o transferencias tiene para notificar?",
//     },
//     {
//         label: "Tipo de Operacion",
//         activo: false,
//         validacion: false,
//         opcion: 2,
//         texto: "Seleccione la forma en que fue cancelado el adiestramiento, o el servicio ofrecido",
//     },
//     {
//         label: "Datos de la transferencia /depósito",
//         activo: false,
//         validacion: false,
//         opcion: 3,
//         texto: "Datos de la transferencia/depósito",
//     },
//     {
//         label: "Datos de usuario",
//         activo: false,
//         validacion: false,
//         opcion: 4,
//         texto: "Datos del usuario",
//         textoEmpresa: "Datos de la empresa y su representante",
//     },
//     {
//         label: "Datos del adiestramiento",
//         activo: false,
//         validacion: false,
//         opcion: 5,
//         texto: "Datos de la vivienda",
//     },
//     {
//         label: "Recibo",
//         activo: false,
//         validacion: false,
//         opcion: 6,
//         texto: "Verifique sus datos antes de continuar",
//     },
// ];

const arrayFases = [
    {
        label: "notPago.cantDeposito",
        activo: true,
        validacion: false,
        opcion: 1,
        texto: "notPago.cantDepositoTexto",
    },
    {
        label: "notPago.tipoOperacion",
        activo: false,
        validacion: false,
        opcion: 2,
        texto: "notPago.tipoOperacionTexto",
    },
    {
        label: "notPago.datoTransferencia",
        activo: false,
        validacion: false,
        opcion: 3,
        texto: "notPago.datoTransferenciaTexto",
    },
    {
        label: "notPago.datoUsuario",
        activo: false,
        validacion: false,
        opcion: 4,
        texto: "notPago.datoUsuarioTexto",
        textoEmpresa: "notPago.datoEmpresaTexto",
    },
    {
        label: "notPago.datoAdiestramiento",
        activo: false,
        validacion: false,
        opcion: 5,
        texto: "notPago.datoAdiestramientoTexto",
    },
    {
        label: "notPago.datoRecibo",
        activo: false,
        validacion: false,
        opcion: 6,
        texto: "notPago.datoReciboTexto",
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

    const { t, i18n } = useTranslation();

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
                <option value="">{t("notPago.seleccionarNumero")}</option>
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

    const { t, i18n } = useTranslation();

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
                <option value="">{t("notPago.seleccionarForma")}</option>
                {[
                    { label: `${t("notPago.deposito")}`, value: "deposito" },
                    {
                        label: `${t("notPago.transferencia")}`,
                        value: "transferencia",
                    },
                ].map((x, i) => (
                    <option key={i + 1} value={x?.value}>
                        {x?.label}
                    </option>
                ))}
            </select>
        </section>
    );
};

export const Fase03 = ({ onSubmit, botonEnviarRef }) => {
    const { t, i18n } = useTranslation();
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
            moneda,
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
                formularioCompletado: false,
            });
            return;
        }
        onSubmit(
            onSubmit({
                proceso: 3,
                formularioCompletado: true,
                data: formulario,
            })
        );
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
                    <label> {t("notPago.monto")}</label>
                    <input
                        type="text"
                        name="monto"
                        value={formulario.monto}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label> {t("notPago.moneda")}</label>
                    <input
                        type="text"
                        name="moneda"
                        value={formulario.moneda}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label> {t("notPago.bancoOrigen")}</label>
                    <input
                        type="text"
                        name="bancoOrigen"
                        value={formulario.bancoOrigen}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>{t("notPago.paisCuentaBancoOrigen")}</label>
                    <input
                        type="text"
                        name="paisCuentaBancoOrigen"
                        value={formulario.paisCuentaBancoOrigen}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>{t("notPago.bancoDestino")}</label>
                    <input
                        type="text"
                        name="bancoDestino"
                        value={formulario.bancoDestino}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>{t("notPago.fechaDeposito")} </label>
                    <input
                        type="date"
                        name="fechaDeposito"
                        value={formulario.fechaDeposito}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label> {t("notPago.numTransferencia")} </label>
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

export const Fase04 = ({ onSubmit, botonEnviarRef, user }) => {
    const { t, i18n } = useTranslation();

    const [formulario, setFormulario] = useState({});

    const manejadorSubmit = (evento) => {
        evento.preventDefault();
        console.log("manejadorSubmit fase04", formulario);
        if (user === "user") {
            const {
                nombre,
                apellido,
                cedula,
                paisProcedencia,
                codigoCliente,
                correo,
                telefono,
            } = formulario;

            if (
                !nombre ||
                !apellido ||
                !cedula ||
                !paisProcedencia ||
                !codigoCliente ||
                !correo ||
                !telefono
            ) {
                onSubmit({
                    proceso: 4,
                    formularioCompletado: false,
                });
                return;
            }
            onSubmit(
                onSubmit({
                    proceso: 4,
                    formularioCompletado: true,
                    data: formulario,
                })
            );

            return;
        }

        if (user === "empresa") {
            const {
                telefono,
                correoEmpresa,
                nombreApellido,
                direccion,
                paisProcedenciaEmpresa,
                rif,
                nombreEmpresa,
            } = formulario;

            if (
                !telefono ||
                !correoEmpresa ||
                !nombreApellido ||
                !direccion ||
                !paisProcedenciaEmpresa ||
                !rif ||
                !nombreEmpresa
            ) {
                onSubmit({
                    proceso: 4,
                    formularioCompletado: false,
                });
                return;
            }
            onSubmit(
                onSubmit({
                    proceso: 4,
                    formularioCompletado: true,
                    data: formulario,
                })
            );

            return;
        }
    };
    const manejarChange = (evento) => {
        const { name, value } = evento.target;
        console.log("manejarChange manejarChange", {
            name,
            value,
        });
        // console.log("manejar change",evento.target)
        setFormulario({
            ...formulario,
            [name]: value,
        });
    };

    return (
        <>
            {user === "user" ? (
                <section className="containerFase01">
                    <form className="formFase03" onSubmit={manejadorSubmit}>
                        <section className="containerRowForm">
                            <label> {t("notPago.nombre")} </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label>{t("notPago.apellido")} </label>
                            <input
                                type="text"
                                name="apellido"
                                value={formulario.apellido}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label>{t("notPago.cedula")} </label>
                            <input
                                type="text"
                                name="cedula"
                                value={formulario.cedula}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label> {t("notPago.paisProcedencia")}</label>
                            <input
                                type="text"
                                name="paisProcedencia"
                                value={formulario.paisProcedencia}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label> {t("notPago.codigoCliente")} </label>
                            <input
                                type="text"
                                name="codigoCliente"
                                value={formulario.codigoCliente}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label>{t("notPago.correo")}</label>
                            <input
                                type="text"
                                name="correo"
                                value={formulario.correo}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label> {t("notPago.telefono")}</label>
                            <input
                                type="text"
                                name="telefono"
                                value={formulario.telefono}
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
            ) : (
                <section className="containerFase01">
                    <form className="formFase03" onSubmit={manejadorSubmit}>
                        <section className="containerRowForm">
                            <label> {t("notPago.nombreEmpresa")} </label>
                            <input
                                type="text"
                                name="nombreEmpresa"
                                value={formulario.nombreEmpresa}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label>{t("notPago.rif")} </label>
                            <input
                                type="text"
                                name="rif"
                                value={formulario.rif}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label>
                                {" "}
                                {t("notPago.paisProcedenciaEmpresa")}
                            </label>
                            <input
                                type="text"
                                name="paisProcedenciaEmpresa"
                                value={formulario.paisProcedenciaEmpresa}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label>{t("notPago.ciudad")}</label>
                            <input
                                type="text"
                                name="ciudad"
                                value={formulario.ciudad}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label> {t("notPago.direccion")} </label>
                            <input
                                type="textArea"
                                name="direccion"
                                value={formulario.direccion}
                                onChange={manejarChange}
                                required
                            />
                        </section>

                        <section className="containerText">
                            <p>{t("notPago.datosRepresentante")} </p>
                        </section>
                        <section className="containerRowForm">
                            <label> {t("notPago.nombreApellido")}</label>
                            <input
                                type="date"
                                name="nombreApellido"
                                value={formulario.nombreApellido}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label> {t("notPago.correoEmpresa")} </label>
                            <input
                                type="text"
                                name="correoEmpresa"
                                value={formulario.correoEmpresa}
                                onChange={manejarChange}
                                required
                            />
                        </section>
                        <section className="containerRowForm">
                            <label> {t("notPago.telefono")}</label>
                            <input
                                type="text"
                                name="telefono"
                                value={formulario.telefono}
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
            )}
        </>
    );
};

export const Fase05 = ({ onSubmit, botonEnviarRef }) => {
    const { t, i18n } = useTranslation();

    const [formulario, setFormulario] = useState({});

    const manejadorSubmit = (evento) => {
        evento.preventDefault();
        console.log("en re adkfhe mebfkwejg", formulario);
        const {
            pais,
            estado,
            ciudad,
            zona,
            descripcion,
            fechaPublicacion,
            fechaVencimiento,
            tipoOperacion,
            idiomaPublicacion,
            precio,
        } = formulario;

        if (
            !pais ||
            !estado ||
            !ciudad ||
            !zona ||
            !descripcion ||
            !fechaPublicacion ||
            !fechaVencimiento ||
            !tipoOperacion ||
            !idiomaPublicacion ||
            !precio
        ) {
            onSubmit({
                proceso: 5,
                formularioCompletado: false,
            });
            return;
        }
        onSubmit(
            onSubmit({
                proceso: 5,
                formularioCompletado: true,
                data: formulario,
            })
        );
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
                    <label> {t("notPago.pais")} </label>
                    <input
                        type="text"
                        name="pais"
                        value={formulario.pais}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>{t("notPago.estado")} </label>
                    <input
                        type="text"
                        name="estado"
                        value={formulario.estado}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>{t("notPago.ciudad")}</label>
                    <input
                        type="text"
                        name="ciudad"
                        value={formulario.ciudad}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerRowForm">
                    <label>{t("notPago.zona")}</label>
                    <input
                        type="text"
                        name="zona"
                        value={formulario.zona}
                        onChange={manejarChange}
                        required
                    />
                </section>

                <section className="containerRowForm">
                    <label>{t("notPago.descripcion")} </label>
                    <input
                        type="text"
                        name="descripcion"
                        value={formulario.descripcion}
                        onChange={manejarChange}
                        required
                    />
                </section>
                <section className="containerCol">
                    <section className="containerRowForm">
                        <label>{t("notPago.fechaPublicacion")}</label>
                        <input
                            type="date"
                            name="fechaPublicacion"
                            value={formulario.fechaPublicacion}
                            onChange={manejarChange}
                            required
                        />
                    </section>

                    <section className="containerRowForm">
                        <label>{t("notPago.fechaVencimiento")} </label>
                        <input
                            type="date"
                            name="fechaVencimiento"
                            value={formulario.fechaVencimiento}
                            onChange={manejarChange}
                            required
                        />
                    </section>
                </section>
                <section className="containerCol">
                    <section className="containerRowForm">
                        <label>{t("notPago.tipoOperacion")} </label>
                        <input
                            type="text"
                            name="tipoOperacion"
                            value={formulario.tipoOperacion}
                            onChange={manejarChange}
                            required
                        />
                    </section>
                    <section className="containerRowForm">
                        <label>{t("notPago.idiomaPublicacion")} </label>
                        <input
                            type="text"
                            name="idiomaPublicacion"
                            value={formulario.idiomaPublicacion}
                            onChange={manejarChange}
                            required
                        />
                    </section>
                </section>
                <section className="containerRowForm">
                    <label> {t("notPago.precio")} </label>
                    <input
                        type="text"
                        name="precio"
                        value={formulario.precio}
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

export const Fase06 = ({ fase03, fase04, fase05, user }) => {
    const { t, i18n } = useTranslation();
    const now = new Date();

    console.log("#".repeat(50));
    console.log({ fase03, fase04, fase05 });
    console.log("#".repeat(50));

    return (
        <>
            {user === "user" ? (
                <section className="containerFase06">
                    <header>
                        <h2>TuVivienda.com C.A</h2>
                        <span className="rif-data">
                            {t("notPago.rif")}: {new Date().getMilliseconds()}
                        </span>
                    </header>

                    <article>
                        <span className="bussiness-data">
                            {t("notPago.dataFase02")}
                        </span>

                        <div className="bill-info">
                            <div className="table-emit-data">
                                <div className="title">
                                    {t("notPago.fechaEmision")}
                                </div>

                                <div className="label-day">
                                    {t("notPago.dia")}
                                </div>
                                <div className="label-month">
                                    {t("notPago.mes")}
                                </div>
                                <div className="label-year">
                                    {t("notPago.anio")}
                                </div>

                                <div className="country">
                                    {t("notPago.en")}: Venezuela
                                </div>
                                <div className="value-day">
                                    {now.getDate() < 10
                                        ? `0${now.getDate()}`
                                        : now.getDate()}
                                </div>
                                <div className="value-month">
                                    {now.getMonth() < 10
                                        ? `0${now.getMonth()}`
                                        : now.getMonth()}
                                </div>
                                <div className="value-year">
                                    {now.getFullYear()}
                                </div>
                            </div>

                            <div className="bill-data">
                                <span>
                                    {t("notPago.factura")}: 000-{" "}
                                    {Math.floor(Math.random() * 100) + 1}
                                </span>
                                <span>
                                    {t("notPago.numControl")}: 000-
                                    {Math.floor(Math.random() * 100) + 1}
                                </span>
                            </div>
                        </div>

                        <div className="bill-tables">
                            <div className="table-user_data">
                                <div className="title">
                                    {t("notPago.datoUsuario")}
                                </div>

                                <div className="label-name">
                                    {t("notPago.nombre")}
                                </div>
                                <div className="value-name">
                                    {fase04.nombre}
                                </div>

                                <div className="label-lastname">
                                    {t("notPago.apellido")}
                                </div>
                                <div className="value-lastname">
                                    {fase04.apellido}
                                </div>

                                <div className="label-ci">
                                    {t("notPago.dni")}
                                </div>
                                <div className="value-ci">{fase04.cedula}</div>

                                <div className="label-country">
                                    {t("notPago.paisProcedencia")}
                                </div>
                                <div className="value-country">
                                    {fase04.paisProcedencia}
                                </div>

                                <div className="label-client_code">
                                    {t("notPago.codigoCliente")}
                                </div>
                                <div className="value-client_code">
                                    {fase04.codigoCliente}
                                </div>

                                <div className="label-email">
                                    {t("notPago.correo")}
                                </div>
                                <div className="value-email">
                                    {fase04.correo}
                                </div>

                                <div className="label-phoneNumber">
                                    {t("notPago.telefono")}
                                </div>
                                <div className="value-phoneNumber">
                                    {fase04.telefono}
                                </div>
                            </div>

                            <div className="table-deposit_data">
                                <div className="title">
                                    {t("notPago.datosTransferenciaDeposito")}
                                </div>

                                <div className="label-amount">
                                    {t("notPago.monto")}
                                </div>
                                <div className="value-amount">
                                    {fase03.monto} {fase03.moneda}
                                </div>

                                <div className="label-from_bank">
                                    {t("notPago.bancoOrigen")}
                                </div>
                                <div className="value-from_bank">
                                    {fase03.bancoOrigen}
                                </div>

                                <div className="label-country">
                                    {t("notPago.paisBancoOrigen")}
                                </div>
                                <div className="value-country">
                                    {fase03.paisCuentaBancoOrigen}
                                </div>

                                <div className="label-to_bank">
                                    {t("notPago.bancoDestino")}
                                </div>
                                <div className="value-to_bank">
                                    {fase03.bancoDestino}
                                </div>

                                <div className="label-transfered_at">
                                    {t("notPago.fechaHizoDeposito")}
                                </div>
                                <div className="value-transfered_at">
                                    {fase03.fechaDeposito}
                                </div>

                                <div className="label-transfer_reference">
                                    {t("notPago.numeroTransferencia")}
                                </div>
                                <div className="value-transfer_reference">
                                    {fase03.numTransferencia}
                                </div>
                            </div>

                            <div className="table-home_data">
                                <div className="title">
                                    {t("notPago.datoAdiestramientoTexto")}
                                </div>

                                <div className="label-country">
                                    {t("notPago.pais")}
                                </div>
                                <div className="value-country">
                                    {fase05.pais}
                                </div>

                                <div className="label-state">
                                    {t("notPago.estado")}
                                </div>
                                <div className="value-state">
                                    {fase05.estado}
                                </div>

                                <div className="label-city">
                                    {t("notPago.ciudad")}
                                </div>
                                <div className="value-city">
                                    {fase05.ciudad}
                                </div>

                                <div className="label-zip_code">
                                    {t("notPago.zona")}
                                </div>
                                <div className="value-zip_code">
                                    {fase05.zona}
                                </div>

                                <div className="label-description">
                                    {t("notPago.descripcion")}
                                </div>
                                <div className="value-description">
                                    {fase05.descripcion}
                                </div>

                                <div className="label-published_at">
                                    {t("notPago.fechaPublicacion")}
                                </div>
                                <div className="value-published_at">
                                    {fase05.fechaPublicacion}
                                </div>

                                <div className="label-expire_at">
                                    {t("notPago.fechaVencimiento")}
                                </div>
                                <div className="value-expire_at">
                                    {fase05.fechaVencimiento}
                                </div>

                                <div className="label-type_transaction">
                                    {t("notPago.tipoOperacion")}
                                </div>
                                <div className="value-type_transaction">
                                    {fase05.tipoOperacion}
                                </div>

                                <div className="label-language_public">
                                    {t("notPago.idiomaPublicacion")}
                                </div>
                                <div className="value-language_public">
                                    {fase05.idiomaPublicacion}
                                </div>

                                <div className="label-price">
                                    {t("notPago.precio")}
                                </div>
                                <div className="value-price">
                                    {fase05.precio}
                                </div>
                            </div>
                        </div>
                    </article>

                    <footer className="bill-actions">
                        <button>{t("notPago.notificarPago")}</button>
                    </footer>
                </section>
            ) : (
                <section className="containerFase06">
                    <header>
                        <h2>TuVivienda.com C.A</h2>
                        <span className="rif-data">
                            {t("notPago.rif")}: {new Date().getMilliseconds()}
                        </span>
                    </header>

                    <article>
                        <span className="bussiness-data">
                            {t("notPago.dataFase02")}
                        </span>

                        <div className="bill-info">
                            <div className="table-emit-data">
                                <div className="title">
                                    {t("notPago.fechaEmision")}
                                </div>

                                <div className="label-day">
                                    {t("notPago.dia")}
                                </div>
                                <div className="label-month">
                                    {t("notPago.mes")}
                                </div>
                                <div className="label-year">
                                    {t("notPago.anio")}
                                </div>

                                <div className="country">
                                    {t("notPago.en")}: Venezuela
                                </div>
                                <div className="value-day">
                                    {now.getDate() < 10
                                        ? `0${now.getDate()}`
                                        : now.getDate()}
                                </div>
                                <div className="value-month">
                                    {now.getMonth() < 10
                                        ? `0${now.getMonth()}`
                                        : now.getMonth()}
                                </div>
                                <div className="value-year">
                                    {now.getFullYear()}
                                </div>
                            </div>

                            <div className="bill-data">
                                <span>
                                    {t("notPago.factura")}: 000-{" "}
                                    {Math.floor(Math.random() * 100) + 1}
                                </span>
                                <span>
                                    {t("notPago.numControl")}: 000-
                                    {Math.floor(Math.random() * 100) + 1}
                                </span>
                            </div>
                        </div>

                        <div className="bill-tables02">
                    
                            <div className="table-empresa_data">
                                <div className="title">
                                    {t("notPago.nombreEmpresa")}
                                </div>

                                <div className="label-name">
                                    {t("notPago.nombreEmpresa")}
                                </div>
                                <div className="value-name">
                                    {fase04.nombreEmpresa}
                                </div>

                                <div className="label-lastname">
                                    {t("notPago.rif")}
                                </div>
                                <div className="value-lastname">
                                    {fase04.rif}
                                </div>

                                <div className="label-ci">
                                    {t("notPago.dni")}
                                </div>
                                <div className="value-ci">{fase04.paisProcedenciaEmpresa}</div>

                                <div className="label-country">
                                    {t("notPago.paisProcedencia")}
                                </div>
                                <div className="value-country">
                                    {fase04.paisProcedenciaEmpresa}
                                </div>

                                <div className="label-client_code">
                                    {t("notPago.ciudad")}
                                </div>
                                <div className="value-client_code">
                                    {fase04.ciudad}
                                </div>

                                <div className="label-email">
                                    {t("notPago.direccion")}
                                </div>
                                <div className="value-email">
                                    {fase04.direccion}
                                </div>
                            </div>

                            <div className="table-deposit_data">
                                <div className="title">
                                    {t("notPago.datosTransferenciaDeposito")}
                                </div>

                                <div className="label-amount">
                                    {t("notPago.monto")}
                                </div>
                                <div className="value-amount">
                                    {fase03.monto} {fase03.moneda}
                                </div>

                                <div className="label-from_bank">
                                    {t("notPago.bancoOrigen")}
                                </div>
                                <div className="value-from_bank">
                                    {fase03.bancoOrigen}
                                </div>

                                <div className="label-country">
                                    {t("notPago.paisBancoOrigen")}
                                </div>
                                <div className="value-country">
                                    {fase03.paisCuentaBancoOrigen}
                                </div>

                                <div className="label-to_bank">
                                    {t("notPago.bancoDestino")}
                                </div>
                                <div className="value-to_bank">
                                    {fase03.bancoDestino}
                                </div>

                                <div className="label-transfered_at">
                                    {t("notPago.fechaHizoDeposito")}
                                </div>
                                <div className="value-transfered_at">
                                    {fase03.fechaDeposito}
                                </div>

                                <div className="label-transfer_reference">
                                    {t("notPago.numeroTransferencia")}
                                </div>
                                <div className="value-transfer_reference">
                                    {fase03.numTransferencia}
                                </div>
                            </div>

                            <div className="table-home_data">
                                <div className="title">
                                    {t("notPago.datoAdiestramientoTexto")}
                                </div>

                                <div className="label-country">
                                    {t("notPago.pais")}
                                </div>
                                <div className="value-country">
                                    {fase05.pais}
                                </div>

                                <div className="label-state">
                                    {t("notPago.estado")}
                                </div>
                                <div className="value-state">
                                    {fase05.estado}
                                </div>

                                <div className="label-city">
                                    {t("notPago.ciudad")}
                                </div>
                                <div className="value-city">
                                    {fase05.ciudad}
                                </div>

                                <div className="label-zip_code">
                                    {t("notPago.zona")}
                                </div>
                                <div className="value-zip_code">
                                    {fase05.zona}
                                </div>

                                <div className="label-description">
                                    {t("notPago.descripcion")}
                                </div>
                                <div className="value-description">
                                    {fase05.descripcion}
                                </div>

                                <div className="label-published_at">
                                    {t("notPago.fechaPublicacion")}
                                </div>
                                <div className="value-published_at">
                                    {fase05.fechaPublicacion}
                                </div>

                                <div className="label-expire_at">
                                    {t("notPago.fechaVencimiento")}
                                </div>
                                <div className="value-expire_at">
                                    {fase05.fechaVencimiento}
                                </div>

                                <div className="label-type_transaction">
                                    {t("notPago.tipoOperacion")}
                                </div>
                                <div className="value-type_transaction">
                                    {fase05.tipoOperacion}
                                </div>

                                <div className="label-language_public">
                                    {t("notPago.idiomaPublicacion")}
                                </div>
                                <div className="value-language_public">
                                    {fase05.idiomaPublicacion}
                                </div>

                                <div className="label-price">
                                    {t("notPago.precio")}
                                </div>
                                <div className="value-price">
                                    {fase05.precio}
                                </div>
                            </div>

                            <div className="table-userEmpresa_data">
                                <div className="title">
                                    {t("notPago.datosRepresentante")}
                                </div>

                                <div className="label-country">
                                    {t("notPago.nombreApellido")}
                                </div>
                                <div className="value-country">
                                    {fase05.nombreApellido}
                                </div>

                                <div className="label-state">
                                    {t("notPago.correo")}
                                </div>
                                <div className="value-state">
                                    {fase05.correo}
                                </div>

                                <div className="label-city">
                                    {t("notPago.telefono")}
                                </div>
                                <div className="value-city">
                                    {fase05.telefono}
                                </div>
                            </div>


                        </div>
                    </article>

                    <footer className="bill-actions">
                        <button>{t("notPago.notificarPago")}</button>
                    </footer>
                </section>
            )}
        </>
    );
};

export const NotificarPago = () => {
    const { t, i18n } = useTranslation();

    const [selectItem, setSelectItem] = useState({});
    const [opciones, setOpciones] = useState(arrayFases);
    const [proceso, setProceso] = useState(1);
    const [infFase01, setInfFase01] = useState({});
    const [infFase02, setInfFase02] = useState({});
    const [infFase03, setInfFase03] = useState({});
    const [infFase04, setInfFase04] = useState({});
    const [infFase05, setInfFase05] = useState({});

    const botonEnviarRefFase = useRef();

    const manejadorFormulario = (formulario) => {
        console.log("formulario ###########", formulario);

        if (formulario) {
            const { proceso, formularioCompletado, data } = formulario;

            if (proceso === 3) setInfFase03(data);
            if (proceso === 4) setInfFase04(data);
            if (proceso === 5) setInfFase05(data);

            if (formularioCompletado) {
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

        if (proceso === 3 || proceso === 4 || proceso === 5) {
            botonEnviarRefFase?.current?.click();
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
        if (
            selectItem?.validacion &&
            (selectItem.opcion === 3 ||
                selectItem.opcion === 4 ||
                selectItem.opcion === 5)
        ) {
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
                        botonEnviarRef={botonEnviarRefFase}
                    />
                ) : proceso === 4 ? (
                    <Fase04
                        selectItem={selectItem}
                        setSelectItem={setSelectItem}
                        opciones={opciones}
                        setOpciones={setOpciones}
                        onSubmit={manejadorFormulario}
                        botonEnviarRef={botonEnviarRefFase}
                        user="user"
                    />
                ) : proceso === 5 ? (
                    <Fase05
                        selectItem={selectItem}
                        setSelectItem={setSelectItem}
                        opciones={opciones}
                        setOpciones={setOpciones}
                        onSubmit={manejadorFormulario}
                        botonEnviarRef={botonEnviarRefFase}
                    />
                ) : proceso === 6 ? (
                    <Fase06
                        fase03={infFase03}
                        fase04={infFase04}
                        fase05={infFase05}
                        user="user"
                    />
                ) : null}
            </>
        </div>
    );
};
