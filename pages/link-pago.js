import Head from 'next/head'
import Image from 'next/image'
import MediaQuery from 'react-responsive'

import styles from '../styles/paginas/LinkPago.module.scss'

const LinkPago = () => {
    return(
        <>
            <Head>
                <title>Link de pago gratuito | Puntopay</title>
                <meta name="description" content="Empieza a vender por internet desde donde te encuentres." />
            </Head>
            <main>
                <div className="full-size banner_home">
                    <div className="banner_image_container">
                        <MediaQuery maxDeviceWidth={ 768 } orientation='portrait'>
                            <Image 
                                src="/images/banner-link-pago.png"
                                alt="Puntopay, link de pago gratuito"
                                layout="fill"
                                objectFit="cover"
                                quality={ 100 }
                            />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={ 769 } >
                            <Image 
                                src="/images/pago-gratuito-banner.png"
                                alt="Puntopay, link de pago gratuito"
                                layout="fill"
                                objectFit="cover"
                                quality={ 100 }
                            />
                        </MediaQuery>
                    </div>
                    <div className="banner_text_container">
                        <div className="banner_text_wrap">
                            <h2><span className="font-color-magenta">Con nuestro link de pago GRATUITO,</span> puedes recibir pagos en línea rápido y fácil.</h2> 
                            <h3>El pago por venta es <span className="font-color-magenta">$300 + 3% + IVA</span></h3>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="site-inner-wrap column-container has-2-cols">
                        <div className={`column ${ styles.link_image_container }`}>
                            <Image 
                                src="/images/video01.gif"
                                alt="Paga con Visa, Mastercard o PSE"
                                layout="fixed"
                                height={ 648 }
                                width={ 318 }
                            />
                        </div>
                        <div className={`column ${ styles.link_paso_1 }`}>
                            <h2 className="font-color-magenta">¿Qué es el link de pago?</h2>
                            <p>Es un link que puedes compartir con tus clientes para que paguen sus compras con tarjeta de crédito o PSE, desde cualquier parte del mundo de una forma facil, rápida y segura.</p>
                            <h4 className="font-color-aguamarina">En 3 simples pasos te olvidas del efectivo:</h4>
                            <ol className={`lista-ordenada ${ styles.lista_ordenada }`}>
                                <li>Descarga Puntopay.</li>
                                <li>Activa tu link de pago.</li>
                                <li>Compártelo por WhatsApp, redes sociales o correo electrónico.</li>
                            </ol>
                            <p className="small-font">*Con Puntopay no tienes que generar un link de pago por cada cliente. Podrás usar el mismo link de por vida.</p>
                            <p className="small-font">* También podemos crear un link de pago personalizado con tu marca.</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="site-inner-wrap column-container has-2-cols">
                        <div className={`column ${ styles.link_paso_2 }`}>
                            <h2 className="font-color-magenta">¿Cómo pagan mis clientes?</h2>
                            <p>Comparte el link de pago Tu número de celular es tu numero de cuenta</p>
                            <h4 className="font-color-aguamarina">Tu cliente solo debe seguir 2 pasos:</h4>
                            <ol className={`lista-ordenada ${ styles.lista_ordenada }`}>
                                <li>Ingresar el monto a pagar (desde $10.000 hasta 2 millones) y sus datos personales: Nombre, correo electrónico y celular.</li>
                                <li>Elegir el método de pago: PSE o tarjeta de crédito y ¡listo!.</li>
                            </ol>
                            <Image 
                                src="/images/visa-mastercard-pse.png"
                                alt="Paga con Visa, Mastercard o PSE"
                                layout="fixed"
                                height={ 59 }
                                width={ 242 }
                            />
                        </div>
                        <div className={`column ${ styles.link_image_container }`}>
                            <Image 
                                src="/images/video02.gif"
                                alt="Paga con Visa, Mastercard o PSE"
                                layout="fixed"
                                height={ 648 }
                                width={ 318 }
                            />
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="font-color-magenta text-center">¿Cómo activo mi cuenta Puntopay?</h2>
                    <p className="ancho-60 center text-center">Solo necesitas tu cédula de ciudadanía o cédula de extranjería, tener una línea celular de un operador en Colombia y un correo electrónico. </p>
                </div>
            </main>
        </>
    )
}

export default LinkPago