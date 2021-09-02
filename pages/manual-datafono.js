import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import MediaQuery from 'react-responsive'
import VisaMastercard from '../public/images/visa-mastercard.svg'
import EncendidoApagado from '../public/images/encendido-apagado.svg'
import ConoceDatafono from '../public/images/conoce-datafono.svg'
import DatafonoPartes from '../public/images/datafono-partes.svg'
import GooglePlay from '../public/images/google-play.svg'
import Tecla from '../public/images/tecla.svg'
import Firma from '../public/images/firma.svg'

import styles from '../styles/paginas/ManualDatafono.module.scss'

const ManualDatafono = () => {

    return(
        <>
            <Head>
                <title>Datáfono | Puntopay</title>
                <meta name="description" content="Empieza a vender por internet desde donde te encuentres." />
            </Head>
            <main className>
                <div className="full-size banner_home">
                    <div className="banner_image_container">
                        <MediaQuery maxDeviceWidth={ 768 } orientation='portrait'>
                            <Image 
                                src="/images/banner-datafono.png"
                                alt="Puntopay, solucion de medios para pagos digitales"
                                layout="fill"
                                objectFit="cover"
                                quality={ 100 }
                            />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={ 769 } >
                            <Image 
                                src="/images/datafono-banner.png"
                                alt="Puntopay, solucion de medios para pagos digitales"
                                layout="fill"
                                objectFit="cover"
                                quality={ 100 }
                            />
                        </MediaQuery>
                    </div>
                    <div className="banner_text_container">
                        <div className={`banner_text_wrap ${ styles.manual_banner_text }`}>
                            <h2>¿Cómo activo mi datáfono Puntopay?</h2>
                            <VisaMastercard />
                        </div>
                    </div>
                </div>
                <div className={ styles.partes_datafono_container }>
                    <div className="site-inner-wrap column-container has-2-cols">
                        <div className="column">
                            <h2>Conoce tu datáfono Puntopay</h2>
                            <ConoceDatafono />
                        </div>
                        <div className="column">
                            <h2>Carga tu datáfono Puntopay</h2>
                            <div className={ styles.encendido_apagado }>
                                <EncendidoApagado />
                            </div>
                            <div className={ styles.partes_container }>
                                <DatafonoPartes />
                                <div className={ styles.partes_lista }>
                                    <ul>
                                        <li>Conecta el cable micro USB a la corriente</li>
                                        <li>Se encenderá el foco rojo del indicador Led</li>
                                        <li>Cárgalo durante 3 horas</li>
                                        <li>El indicador led se encenderá de color azul cuando la batería de tu datafono Puntopay esté completamente cargado</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_uno }>
                    <div className="site-inner-wrap">
                        <h2 className={ styles.titulo_panel }><span>1</span> Descarga la app datáfono Puntopay</h2>
                        <div className="column-container">
                            <div className={ styles.paso_uno_text }>
                                <p>La aplicación es compatible con cualquier smartphone con sistema operativo Android 4.4 o superior.</p>
                                <Link href="https://play.google.com/store/apps/details?id=co.puntored.puntopay&referrer=utm_source%3DFenalco_Asamblea%26utm_medium%3Dcorreo_elctronico%26utm_term%3DAsamblea%2520de%2520Afiliados%26utm_content%3DDescarga_Puntopay">
                                    <a target="_blank"><GooglePlay/></a>
                                </Link>
                            </div>
                            <div className={ styles.paso_uno_image }>
                                <Image 
                                    src="/images/tienda-google.png"
                                    alt="Puntopay en Google Play"
                                    layout="fixed"
                                    height={ 560 }
                                    width={ 277 }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_dos }>
                    <div className="site-inner-wrap">
                        <h2 className={ styles.titulo_panel }><span>2</span> Conecta tu datáfono Puntopay por bluetooth a tu smartphone</h2>
                        <div className="column-container">
                            <div className={ styles.paso_dos_text }>
                                <p>Búscalo como "MPOS" seguido del número de serie de tu datáfono de Puntopay</p>
                            </div>
                            <div className={ styles.paso_dos_image }>
                                <Image 
                                    src="/images/mpos.png"
                                    alt="Conecta tu datáfono Puntopay"
                                    layout="fixed"
                                    height={ 322 }
                                    width={ 702 }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_dos }>
                    <div className="site-inner-wrap">
                        <h2 className={ styles.titulo_panel }><span>3</span> Ingresa el monto a cobrar</h2>
                        <div className="column-container">
                            <div className={ styles.paso_dos_image }>
                                <Image 
                                    src="/images/monto-a-cobrar.png"
                                    alt="Conecta tu datáfono Puntopay"
                                    layout="fixed"
                                    height={ 499 }
                                    width={ 357 }
                                />
                            </div>
                            <div className={ styles.paso_dos_text }>
                                <p>Abre la app Puntopay, ingresa a la sección cobra y selecciona la opción datáfono. Digita el monto a cobrar, selecciona impuestos y propina si aplica.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_dos }>
                    <div className="site-inner-wrap">
                        <h2 className={ styles.titulo_panel }><span>4</span> Inserta o acerca la tarjeta en tu datáfono Puntopay</h2>
                        <div className="column-container">
                            <div className={ styles.paso_dos_image }>
                                <Image 
                                    src="/images/inserta-tarjeta.png"
                                    alt="Conecta tu datáfono Puntopay"
                                    layout="fixed"
                                    height={ 451 }
                                    width={ 588 }
                                />
                            </div>
                            <div className={ styles.paso_dos_text }>
                                <p><span className={ styles.destacado }>Inserta</span> la tarjeta de chip en tu Puntopay</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_dos }>
                    <div className={`site-inner-wrap ${ styles.text_svg }`}>
                        <p>Puedes usar la modalidad contactless.</p>
                        <p>El lector te indicará: inicio NFC, digita la tecla <Tecla /> para activar contactless.</p>
                    </div>
                    <div className="site-inner-wrap">
                        <div className="column-container">
                            <div className={ styles.paso_dos_image }>
                                <Image 
                                    src="/images/contactless.png"
                                    alt="Puntopay contacless"
                                    layout="fixed"
                                    height={ 348 }
                                    width={ 566 }
                                />
                            </div>
                            <div className={ styles.paso_dos_text }>
                                <p><span className={ styles.destacado }>Acerca</span> la tarjeta a la parte tracera del lector Puntopay</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_dos }>
                    <div className="site-inner-wrap">
                        <h2 className={ styles.titulo_panel }><span>5</span> El cliente ingresa la clave</h2>
                        <p className={ styles.desc_panel }>El PIN o clave será requerido para pagos con tarjeta débito.</p>
                        <div className="column-container">
                            <div className={ styles.paso_dos_image }>
                                <Image 
                                    src="/images/inserta-tarjeta.png"
                                    alt="Conecta tu datáfono Puntopay"
                                    layout="fixed"
                                    height={ 451 }
                                    width={ 588 }
                                />
                            </div>
                            <div className={ styles.paso_dos_text }>
                                <p><span className={ styles.destacado }>Inserta</span> la tarjeta de chip en tu Puntopay</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_cinco }>
                    <div className="site-inner-wrap">
                        <div className="column-container">
                            <div className={ styles.paso_cinco_item }>
                                <h3>Si la tarjeta de tu cliente no pide clave</h3>
                                <p>Si el pago es aceptado, la aplicación mostrará una pantalla blanca en donde tu cliente deberá firmar</p>
                            </div>
                            <div className={ styles.paso_cinco_image }>
                                <Firma />
                            </div>
                        </div>
                        <div className="column-container">
                            <div className={ styles.paso_cinco_item }>
                                <h3>Comprobante de pago</h3>
                                <p>Envía el comprobante de pago a tu correo y al correo de tu cliente</p>
                            </div>
                            <div className={ styles.paso_cinco_image }>
                                <Image 
                                    src="/images/comprobante.png"
                                    alt="Comprobante de pago Puntopay"
                                    layout="fixed"
                                    height={ 385 }
                                    width={ 192 }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_seis }>
                    <div className="site-inner-wrap">
                        <div className={ styles.paso_seis_parrafo_uno }>
                            <h3>Si quieres anular una transacción</h3>
                            <p>Para anular una transacción, debes hacerlo dentro de las siguientes 24 horas y debes tener la tarjeta física de tu cliente</p>
                        </div>
                        <div className={`column-container ${ styles.paso_seis_columnas }`}>
                            <div className="column-container">
                                <div className={ styles.paso_cinco_item }>
                                    <p>1. Dirígete al menú principal del app datáfono Puntopay e ingresa en "Anular Transacción"</p>
                                </div>
                                <div className={ styles.paso_cinco_image }>
                                    <Image 
                                        src="/images/transaccion-1.png"
                                        alt="Comprobante de pago Puntopay"
                                        layout="fixed"
                                        height={ 394 }
                                        width={ 195 }
                                    />
                                </div>
                            </div>
                            <div className="column-container">
                                <div className={ styles.paso_cinco_item }>
                                    <p>2. Digíta el número de la transacción</p>
                                </div>
                                <div className={ styles.paso_cinco_image }>
                                    <Image 
                                        src="/images/transaccion-2.png"
                                        alt="Comprobante de pago Puntopay"
                                        layout="fixed"
                                        height={ 394 }
                                        width={ 195 }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.paso_siete }>
                    <div className="site-inner-wrap">
                        <div className="column-container">
                            <div className={ styles.paso_cinco_item }>
                                <p>3. Este paso es similar a la de la transacción, al ingresar la autorización el aplicativo solicitara junto con el datáfono el ingreso de la tarjeta con la que se realizó la transacción para anularla, y nos permitirá de la misma manera enviar el Voucher al correo.</p>
                            </div>
                            <div className={ styles.paso_cinco_image }>
                                <Image 
                                    src="/images/transaccion-3.png"
                                    alt="Comprobante de pago Puntopay"
                                    layout="fixed"
                                    height={ 563 }
                                    width={ 279 }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}

export default ManualDatafono