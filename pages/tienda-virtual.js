import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TextLoop from "react-text-loop";

import Dominio from '../public/images/dominio.svg'
import Envios from '../public/images/envios.svg'
import Personalizacion from '../public/images/personalizable.svg'
import Productos from '../public/images/productos.svg'
import Pasarela from '../public/images/pasarela-pagos.svg'
import CheckList from '../public/images/checklist.svg'
import PasarelaPagos from '../public/images/pasarela-pagos-tienda-virtual.svg'
import MonitorearEnvios from '../public/images/monitorea-envios.svg'
import Promociones from '../public/images/ofertas-promociones-tv.svg'

import styles from '../styles/paginas/TiendaVirtual.module.scss'

const TiendaVirtual = () => {

    return(
        <>
            <Head>
                <title>Tiendas virtuales | Puntopay</title>
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
                        <h2>Empieza a vender por internet desde tu 
                            <TextLoop
                            interval={ 6000 }
                            springConfig={{ stiffness: 180, damping: 8 }}
                            >
                            <span>&nbsp;Casa</span>
                            <span>&nbsp;Oficina</span>
                            <span>&nbsp;Carro</span>
                            </TextLoop>
                        </h2>
                        <div className="banner_visa_pse">
                            <Image 
                                src="/images/visa-mastercard-pse.png"
                                alt="Paga con Visa, Mastercard o PSE"
                                layout="fixed"
                                height={ 59 }
                                width={ 242 }
                            />
                        </div>
                        <Link href="#">
                            <a className="btn btn-amarillo">Quiero mi tienda virtual</a>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className={ `panel ${ styles.caracteristicas }` }>
                    <h2>Te entregamos tu tienda virtual lista para empezar a vender con</h2>
                    <div className={ `site-inner-wrap column-container has-5-cols` }>
                        <div className={ `column ${ styles.carac_item } ${ styles.carac_dominio }` }>
                            <Dominio />
                            <p>Dominio y hosting gratuito</p>
                        </div>
                        <div className={ `column ${ styles.carac_item } ${ styles.carac_envios }` }>
                            <Envios />
                            <p>Rastreo de envíos</p>
                        </div>
                        <div className={ `column ${ styles.carac_item } ${ styles.carac_personalizacion }` }>
                            <Personalizacion />
                            <p>Personalizable</p>
                        </div>
                        <div className={ `column ${ styles.carac_item } ${ styles.carac_productos }` }>
                            <Productos />
                            <p>Productos ilimitados</p>
                        </div>
                        <div className={ `column ${ styles.carac_item } ${ styles.carac_pasarela }` }>
                            <Pasarela />
                            <p>Pasarela de pagos 100% integrada</p>
                        </div>
                    </div>
                </div>
                <div className={`bg-gradient-mav panel ${ styles.pasarela_pagos_panel }`}>
                    <div className={ `site-inner-wrap column-container has-2-cols` }>
                        <div className={ `column ${ styles.pasarela_pagos_ilustracion }` }>
                            <PasarelaPagos />
                        </div>
                        <div className={ `column ${ styles.pasarela_pagos_texto }` }>
                            <h2 className="font-color-blanco">Pasarela de pagos 100% integrada.</h2>
                            <p className="font-color-blanco">El checkout de tu tienda virtual recibirá tarjetas nacionales e internacionales VISA, Mastercard y pagos con PSE.</p>
                            <div className="check-list">
                                <p className={ `check-list-title` }><CheckList/> <strong>Todo tu dinero en billetera Puntopay</strong></p>
                                <p className="check-list-text font-color-blanco">Utilízalo dentro de la app o muévelo a tu cuenta bancaria cuando quieras.</p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title` }><CheckList/> <strong>Solo pagas por transacción</strong></p>
                                <p className="check-list-text font-color-blanco">$300 + 3% por transacción. SIN MENSUALIDAD*, si realizas 8 ventas con link de pago mensuales.</p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title` }><CheckList/> <strong>Transacciones seguras</strong></p>
                                <p className="check-list-text font-color-blanco">Utilizamos servicios especializados para proteger tu información y la de tus clientes con altos protocolos de seguridad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`panel ${ styles.envios_panel }`}>
                    <div className="site-inner-wrap column-container has-2-cols">
                        <div className={`column ${ styles.envios_text }`}>
                            <h2 className="font-color-magenta">Monitorea tus envíos</h2>
                            <p>Control, seguimiento y gestión del ciclo de vida de los pedidos, alistamiento y envío.</p>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.envios_list }` }><CheckList/> <strong>Sistema de control de pedidos</strong></p>
                                <p className="check-list-text">Contamos con una aplicación para la gestión, control y seguimiento de los pedidos y el envío de estos.</p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.envios_list }` }><CheckList/> <strong>Rastrea tus envíos en tiempo real</strong></p>
                                <p className="check-list-text">Recibirás notificaciones con la fecha y hora de la orden.</p>
                            </div>
                            <div className="check-list">
                                <p className={ `check-list-title ${ styles.envios_list }` }><CheckList/> <strong>Trazabilidad</strong></p>
                                <p className="check-list-text">Tendrás acceso a un histórico de cada pedido para poder llevar la trazibilidad. </p>
                            </div>
                        </div>
                        <div className="column">
                            <MonitorearEnvios />
                        </div>
                    </div>
                </div>
                <div className={`panel ${ styles.promociones_panel }`}>
                    <div className="site-inner-wrap column-container has-2-cols">
                        <div className="column">
                            <Promociones />
                        </div>
                        <div className={`column ${ styles.promociones_text }`}>
                            <h2 className="font-color-deep-blue">Crea campañas ofertas y promociones</h2>
                            <p>Aprende todo lo necesario para vender en línea: herramientas, tips, estrategias y mucho más.</p>
                            <p>Te ofrecemos  herramientas que te permitirán fidelizar a tus clientes por medio de la creación de campañas promocionales, códigos de descuento y mucho más.</p>
                        </div>
                    </div>
                </div>
                <div className={`panel bg-gray ${ styles.costos_panel }`}>
                    <h2 className="font-color-deep-blue text-center">¿Cuánto cuesta mi tienda virtual?</h2>
                    <div className={ styles.costos_tabla }>
                        <div className={ styles.costos_item }>
                            <p>Implementación</p>
                            <p className={ styles.costo }>Gratis</p>
                        </div>
                        <div className={ styles.costos_item }>
                            <p>Costo mensual</p>
                            <p className={ styles.costo }>Gratis</p>
                            <p>6 primeros meses*</p>
                        </div>
                        <div className={ styles.costos_item }>
                            <p>Implementación</p>
                            <p className={ styles.costo }>$300 + 3% + IVA</p>
                        </div>
                    </div>
                    <p className="small-font text-center">*A partir del septimo mes, pagas $35.000 mensuales o realizas 8 ventas mensuales con pasarela y no pagas nada.</p>
                </div>
                <div className="panel">
                    <h2 className="font-color-magenta text-center">Regístrate para activar tu tienda</h2>
                </div>
            </main>
        </>
    )

}

export default TiendaVirtual