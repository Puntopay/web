import Head from 'next/head'
import Image from 'next/image'

import FormularioInscripcion from '../components/FormularioInscripcion'

import styles from '../styles/paginas/Puntopay.module.scss'
import Davivienda from '../public/images/davivienda.svg'

const Puntopay = () => {
    
    return(
        <>
            <Head>
                <title>¿Qué es Puntopay?</title>
                <meta name="description" content="Puntopay es la solución de medios de pago digitales." />
            </Head>
            <main className="">
                <div className="site-inner-wrap panel column-container has-2-cols">
                    <div className="column">
                        <h2 className="font-color-magenta">¿Qué es Puntopay?</h2>
                        <p>Puntopay es la solución de medios de pago que ayuda a potenciar el crecimiento de pequeños comercios y profesionales independientes con soluciones financieras desde tu celular. </p>
                        <p>Nuestros datáfonos cuentan con el respaldo de:</p>
                        <div className={`column-container has-2-cols ${ styles.logos_container }`}>
                            <div className={`column ${ styles.davivienda_container }`}>
                                <Davivienda />
                            </div>
                            <div className={`column ${ styles.sfc_container }`}>
                                <Image 
                                    src="/images/sfc.png"
                                    alt="Superintendencia Financiera de Colombia"
                                    height={ 58 }
                                    width={ 178 }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <FormularioInscripcion />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Puntopay