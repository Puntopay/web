import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import PasarelaPagos from '../public/images/pasarela-pagos-tienda-virtual.svg'

import styles from '../styles/paginas/PasarelaPago.module.scss'

const PasarelaPago = () => {

    return(
        <>
            <Head>
                <title>Pasarela de Pago | Puntopay</title>
                <meta name="description" content="Empieza a vender por internet desde donde te encuentres." />
            </Head>
            <main>
                <div className="full-size banner_home">
                    <div className="banner_image_container">
                        <Image 
                            src="/images/pasarela-pago-banner.png"
                            alt="Puntopay, solucion de medios para pagos digitales"
                            layout="fill"
                            objectFit="cover"
                            quality={ 100 }
                        />
                    </div>
                    <div className="banner_text_container">
                        <div className="banner_text_wrap">
                            <h2><span className="font-color-magenta">Si ya tienes tu página web,</span> integra nuestra pasarela de pagos y empieza a vender en internet.</h2>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="site-inner-wrap">
                        <h2 className="text-center">¿Cuál es la comisión de la pasarela?</h2>
                        <p className="text-center font-color-magenta big-fonts"><strong>$300 + 3% del valor de la transacción + IVA</strong></p>
                    </div>
                </div>
                <div className={`panel ${ styles.requisitos_panel } `}>
                    <div className="site-inner-wrap column-container has-2-cols">
                        <div className="column">
                            <PasarelaPagos />
                        </div>
                        <div className={ `column ${ styles.requisitos_text }` }>
                            <h2 className="font-color-amarillo text-center">¿Qué necesito para integrarme?</h2>
                            <p className="font-color-blanco text-center">Consulta aquí la documentación </p>
                            <div className={ styles.requisitos_botones_container }>
                                <Link href="#">
                                    <a className="btn btn-amarillo">Ver la documentación</a>
                                </Link>
                                <Link href="#">
                                    <a className="btn btn-blanco">¿Necesitas ayuda?</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="font-color-magenta text-center">¿Cómo activo mi cuenta Puntopay?</h2>
                    <p className="text-center ancho-60 center">Solo necesitas tu cédula de ciudadanía o cédula de extranjería, tener una línea celular de un operador en Colombia y un correo electrónico. </p>
                </div>
            </main>
        </>
    )

}

export default PasarelaPago