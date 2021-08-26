import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/paginas/Puntopay.module.scss'
import Davivienda from '../public/images/davivienda.svg'

const PreguntasFrecuentes = () => {
    return(
        <>
            <Head>
                <title>¿Preguntas Frecuentes?</title>
                <meta name="description" content="Puntopay es la solución de medios de pago digitales." />
            </Head>
            <main className="">
                <div className="site-inner-wrap panel">
                    <h2 className="text-center font-color-magenta">¿Cómo podemos ayudarte?</h2>
                    <div className="column">
                        <ul className="acordeon">
                            <li>
                                <input type="checkbox" id="list-item-1" />
                                <label htmlFor="list-item-1" className="first">¿Qué es Puntopay?</label>
                                <div className="acordeon-content">
                                    <p>Puntopay es la nueva solución 100% digital de medios de pago de Puntored, la Fintech que ayuda a potenciar el crecimiento de pequeños comercios y profesionales independientes brindando servicios financieros a través de aplicaciones innovadoras. Esta aplicación móvil, busca hacerle más sencilla la vida a las personas y aportar al crecimiento de nuestros comercios y aliados, digitalizando su negocio y apostando a los nuevos cambios que nos impulsa la economía</p>
                                    <p>Puntopay está dirigida a personas naturales y comercios, con el fin de facilitar las transacciones y la recepción de cualquier medio diferente al efectivo, de forma fácil, rápida, segura, en todo momento y en todo lugar.</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-2" />
                                <label htmlFor="list-item-2">Qué puedes hacer en Puntopay?</label>
                                <div className="acordeon-content">
                                    <p>Puntopay está dirigida a personas naturales y comercios, con el fin de facilitar las transacciones y la recepción de cualquier medio diferente al efectivo, de forma fácil, rápida, segura, en todo momento y en todo lugar.</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-3" />
                                <label htmlFor="list-item-3">¿Cómo activo Puntopay?</label>
                                <div className="acordeon-content">
                                    <p>Puntopay está dirigida a personas naturales y comercios, con el fin de facilitar las transacciones y la recepción de cualquier medio diferente al efectivo, de forma fácil, rápida, segura, en todo momento y en todo lugar.</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-4" />
                                <label htmlFor="list-item-4">¿Qué debo tener en cuenta para abrir Puntopay?</label>
                                <div className="acordeon-content">
                                    <p>Puntopay está dirigida a personas naturales y comercios, con el fin de facilitar las transacciones y la recepción de cualquier medio diferente al efectivo, de forma fácil, rápida, segura, en todo momento y en todo lugar.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PreguntasFrecuentes