import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Dominio from '../public/images/dominio.svg'
import Envios from '../public/images/envios.svg'
import Personalizacion from '../public/images/personalizable.svg'
import Productos from '../public/images/productos.svg'
import CheckList from '../public/images/checklist.svg'
import PasarelaPagos from '../public/images/pasarela-pagos-tienda-virtual.svg'

import styles from '../styles/paginas/Datafono.module.scss'

const Datafono = () => {

    return(
        <>
            <Head>
                <title>Datáfono | Puntopay</title>
                <meta name="description" content="Empieza a vender por internet desde donde te encuentres." />
            </Head>
            <main>
                <div className="full-size banner_home">
                    <div className="banner_image_container">
                        <Image 
                            src="/images/tienda-virtual-banner-home.png"
                            alt="Puntopay, solucion de medios para pagos digitales"
                            layout="fill"
                            objectFit="cover"
                            quality={ 100 }
                        />
                    </div>
                    <div className="banner_text_container">
                        <div className="banner_text_wrap">
                        <h2>Sin contratos, sin costos sorpresa. Aquí solo pagas por transacción. <br/><span className="font-color-magenta">¡Ni un peso más!</span></h2>
                        <Link href="#">
                            <a className="btn btn-amarillo">Quiero mi datáfono</a>
                        </Link>
                        <Link href="#">
                            <a className="btn btn-verde">¿Cómo activo mi datáfono?</a>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className={ `panel ${ styles.tarjetas_container }` }>
                    <h2 className="ancho-60 text-center center">Recibe pagos con tarjetas débito y crédito para transacciones sin contacto.</h2>
                    <div className="ancho-50 center grid-container has-2-cols">
                        <div className={ `grid-column ${ styles.tarjetas_item }` }>
                            <Dominio />
                            <p>Cómpralo a través de la app o en la web por $89.000.</p>
                        </div>
                        <div className={ `grid-column ${ styles.tarjetas_item }` }>
                            <Envios />
                            <p>Solo pagas por transacción.</p>
                        </div>
                        <div className={ `grid-column ${ styles.tarjetas_item }` }>
                            <Personalizacion />
                            <p>Se conecta a tu celular a través de la app datáfono Puntopay.</p>
                        </div>
                        <div className={ `grid-column ${ styles.tarjetas_item }` }>
                            <Productos />
                            <p>Acepta transacciones de $1.000 hasta $2.000.000.</p>
                        </div>
                    </div>
                </div>
                <div className={`panel ${ styles.beneficios_container}`}>
                    <div className={ `site-inner-wrap column-container has-2-cols` }>
                        <div className={ `column ${ styles.pasarela_pagos_ilustracion }` }>
                            <PasarelaPagos />
                        </div>
                        <div className={ `column ${ styles.beneficios_texto }` }>
                            <h2 className="font-color-magenta">Conoce nuestros beneficios.</h2>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.beneficios_item }` }><CheckList/> <strong>Sin mensualidades, sin contratos y sin mínimo de transacciones.</strong></p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.beneficios_item }` }><CheckList/> <strong>100% digital. Sin costos por papel.</strong></p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.beneficios_item }` }><CheckList/> <strong>GRATIS transferencias a cuentas Nequi, DaviPlata, Davivienda, Grupo Aval o ScotiaBank Colpatria.</strong></p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.beneficios_item }` }><CheckList/> <strong>Incluye material publicitario.</strong></p>
                            </div>
                            <Link href="#">
                                <a className={`btn btn-amarillo ${ styles.btn }`}>Comprálo ahora</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`panel ${ styles.alquiler_container }`}>
                    <h2 className={`font-color-magenta text-center ${ styles.panel_titulo }`}>Alquila nuestro datáfono Puntopay</h2>
                    <p className={`text-center ${ styles.panel_desc }`}>Si vas a participar en alguna feria o evento y no tienes datáfono, ¡tranquilo,nosotros te lo alquilamos!</p>
                    <p className={`text-center ${ styles.panel_desc }`}>Alquila por 1 día, 2 días o hasta por 1 semana nuestro datáfono Puntopay.</p>
                    <div className="site-inner-wrap column-container">
                        <div className="ancho-70">
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.alquiler_item }` }><CheckList/> <strong>Solo pagas por transacción: 2.99% + impuestos de ley.</strong></p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.alquiler_item }` }><CheckList/> <strong>Una vez hayamos recibido tu solicitud recibirás por correo electrónico la confirmación de tu alquiler.</strong></p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.alquiler_item }` }><CheckList/> <strong>Nosotros te enviamos el datáfono a la ciudad donde estés.</strong></p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.alquiler_item }` }><CheckList/> <strong>Recuerda que debes hacer tu solicitud con al menos 5 días hábiles de anticipación para garantizar que llegue en la fecha en que lo necesitas.</strong></p>
                            </div>
                        </div>
                        <div className={`ancho-30 ${ styles.alquiler_tabla_container }`}>
                            <div className={ styles.alquiler_tabla }>
                                <h4>Precio alquiler</h4>
                                <p>1 día $20.000</p>
                                <p>2 días $30.000</p>
                                <p>1 semana $40.000</p>
                            </div>
                        </div>
                    </div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdAFo66rlDRyTbMZw37lX2vNKU-LgT_gGM6h1mM4AJAaZCwNQ/formrestricted">
                        <a target="_blank" className={`btn btn-amarillo ${ styles.btn }`}>Alquilar datáfono</a>
                    </Link>
                </div>
                <div className={`panel ${ styles.info_tecnica_container }`}>
                    <div className={ `site-inner-wrap column-container` }>
                        <div className={ `ancho-40 ${ styles.infotech_image }` }>
                            <Image 
                                src="/images/datafono-01.png"
                                alt="Paga con Visa, Mastercard o PSE"
                                layout="fixed"
                                height={ 600 }
                                width={ 450 }
                            />
                        </div>
                        <div className={ `ancho-60 ${ styles.infotech_text }` }>
                            <h3 className="font-color-magenta">Información técnica</h3>
                            <div className={ styles.info_tech_item }>
                                <h4>Medidas</h4>
                                <p>6cmx9cm</p>
                            </div>
                            <div className={ styles.info_tech_item }>
                                <h4>Peso</h4>
                                <p>75 gramos</p>
                            </div>
                            <div className={ styles.info_tech_item }>
                                <h4>Compatibilidad</h4>
                                <p>Android 2.1 o superior, iOS 6.0, Windows Phone 8, MS Windows</p>
                            </div>
                            <div className={ styles.info_tech_item }>
                                <h4>Conexión</h4>
                                <p>Bluetooth® v3.0, Bluetooth® v4.0</p>
                            </div>
                            <div className={ styles.info_tech_item }>
                                <h4>Lectores de tarjeta</h4>
                                <p>EMV/PBOC Chip Card Reader, ISO 7816 Compliant Class A, B, C</p>
                            </div>
                            <div className={ styles.info_tech_item }>
                                <h4>Batería</h4>
                                <p>Lithium polymer recargable batería 250 mAH, 3.7V</p>
                            </div>
                            <div className={ styles.info_tech_item }>
                                <h4>Pantalla</h4>
                                <p>Un color display (128 x 40)</p>
                            </div>
                            <div className={ styles.info_tech_item }>
                                <h4>Contenido de la caja</h4>
                                <p>Datáfono, cable y manual de uso</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}

export default Datafono