import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MediaQuery from 'react-responsive'
import TextLoop from "react-text-loop";

import styles from '../styles/paginas/Inicio.module.scss'
import CheckList from '../public/images/checklist.svg'
import AppGallery from '../public/images/app-gallery.svg'
import GooglePlay from '../public/images/google-play.svg'
import AppleStore from '../public/images/app-store.svg'

const Home = () => {
  
  return (
    <>
      <Head>
        <title>Puntopay, solucion de medios para pagos</title>
      </Head>
      <main>
        <div className="full-size banner_home">
          <div className="banner_image_container">
            <MediaQuery maxDeviceWidth={ 768 } orientation='portrait'>
              <Image 
                src="/images/banner-inicio-mobil.png"
                alt="Puntopay, solucion de medios para pagos digitales"
                layout="fill"
                objectFit="cover"
                quality={ 100 }
              />
            </MediaQuery>
            <MediaQuery minDeviceWidth={ 769 } >  
              <Image 
                src="/images/puntopay-medios-de-pago-banner-home.png"
                alt="Puntopay, solucion de medios para pagos digitales"
                layout="fill"
                objectFit="cover"
                quality={ 100 }
              />
            </MediaQuery>
          </div>
          <div className="banner_text_container">
            <div className="banner_text_wrap">
              <h2><span>Puntopay es la solución de medios de pago para &nbsp;</span>
                <TextLoop
                  interval={ 6000 }
                  springConfig={{ stiffness: 180, damping: 8 }}
                >
                  <span>ferreterias</span>
                  <span>droguerías</span>
                  <span>misceláneas</span>
                  <span>ventas por catálogo</span> 
                  <span>ópticas</span> 
                  <span>hoteles</span> 
                  <span>restaurantes</span> 
                  <span>entrenadores personales</span> 
                  <span>consultorios médicos</span>
                </TextLoop>
              </h2>
              <Link href="https://linktr.ee/puntopay">
                <a className="btn btn-amarillo" target="_blank">Descargar puntopay</a>
              </Link>
              <Link href="https://www.youtube.com/channel/UC8TGu45eJS01z_h0ZACO3fQ/videos">
                <a className="btn btn-verde" target="_blank">¿Necesitas ayuda?</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={ `panel ${ styles.listado_productos }` }>
          <h2>Estoy interesado en</h2>
          <div className={ `site-inner-wrap column-container has-4-cols` }>
            <div className={ `column ${ styles.producto } ${ styles.producto_datafono }` }>
              <Link href="/datafono">
                <a><Image 
                  src="/images/datafono-mini.png"
                  alt="Link de pago puntopay"
                  layout="intrinsic"
                  width={112}
                  height={120}
                  quality={ 100 }
                /></a>
              </Link>
              <Link href="/datafono">
                <a>Recibir pagos físicos con tarjetas</a>
              </Link>
            </div>
            <div className={ `column ${ styles.producto }` }>
              <Link href="/tienda-virtual">
                <a><Image 
                  src="/images/tienda-virtual-icon.png"
                  alt="Link de pago puntopay"
                  layout="intrinsic"
                  width={148}
                  height={120}
                  quality={ 100 }
                /></a>
              </Link>
              <Link href="/tienda-virtual">
                <a>Mi tienda virtual</a>
              </Link>
            </div>
            <div className={ `column ${ styles.producto }` }>
              <Link href="/link-pago">
                <a><Image 
                  src="/images/cobros.png"
                  alt="Link de pago puntopay"
                  layout="intrinsic"
                  width={122}
                  height={120}
                  quality={ 100 }
                /></a>
              </Link>
              <Link href="/link-pago">
                <a>Cobrar desde cualquier lugar</a>
              </Link>
            </div>
            <div className={ `column ${ styles.producto }` }>
              <Link href="/pasarela-pago">
                <a><Image 
                  src="/images/pasarela.png"
                  alt="Link de pago puntopay"
                  layout="intrinsic"
                  width={128}
                  height={120}
                  quality={ 100 }
                /></a>
              </Link>
              <Link href="/pasarela-pago">
                <a>Pasarela de pagos en mi web</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gradient-mav panel">
          <div className={ `site-inner-wrap column-container has-2-cols` }>
            <div className={ `column ${ styles.tienda_ilustracion }` }>
                <Image 
                  src='/images/tienda-virtual.png'
                  alt="Tienda virtual lista"
                  layout="intrinsic"
                  width={574}
                  height={524}
                />
            </div>
            <div className={ `column ${ styles.tienda_texto }` }>
                <h2>Te entregamos tu tienda virtual lista para empezar a vender.</h2>
                <div className="grid-container has-2-cols">
                  <div className="grid-column check-list">
                    <p className="check-list-title"><CheckList/> <strong>Dominio y hosting gratuito</strong></p>
                    <p className="check-list-text">Con tu propio dominio.</p>
                  </div>
                  <div className="grid-column check-list">
                    <p className="check-list-title"><CheckList/> <strong>Productos ilimitados</strong></p>
                    <p className="check-list-text">Aquí la cantidad no es limitante.</p>
                  </div>
                  <div className="grid-column check-list">
                    <p className="check-list-title"><CheckList/> <strong>Personalizable</strong></p>
                    <p className="check-list-text">Tu marca a tu gusto y el de tus clientes.</p>
                  </div>
                  <div className="grid-column check-list">
                    <p className="check-list-title"><CheckList/> <strong>Rastreo de envíos</strong></p>
                    <p className="check-list-text">Tu cliente podrá ver el estado de su pedido en tiempo real.</p>
                  </div>
                </div>
                <Link href="#">
                  <a className={`btn btn-amarillo ${ styles.btn }`}>Activar mi tienda virtual</a>
                </Link>
            </div>
          </div>
        </div>
        <div className={`panel ${ styles.link_de_pago }`}>
          <div className="site-inner-wrap column-container has-2-cols">
            <div className={`column ${ styles.link_de_pago_text }`}>
              <h2>¿Qué es el link de pago?</h2>
              <p>Es la forma más fácil de cobrar, para que tus clientes te paguen con tarjeta de crédito o PSE desde cualquier parte del mundo sin necesidad de tener página web o un datáfono.</p>
              <h3>En 3 simples pasos te olvidas del efectivo:</h3>
              <ol className="lista-ordenada">
                <li>Descarga Puntopay</li>
                <li>Activa tu link de pago</li>
                <li>Compártelo por WhatsApp, redes sociales o correo electrónico*</li>
              </ol>
              <p className="small-font">*Con Puntopay no tienes que generar un link de pago por cada cliente. Podrás usar el mismo link de por vida.</p>
              <p className="small-font">* También podemos crear un link de pago personalizado con tu marca.</p>
            </div>
            <div className={`column ${ styles.link_de_pago_image }`}>
              <div className="lista-ordenada">
                <Image 
                  src="/images/link-pago.png"
                  alt="Link de pago puntopay"
                  layout="intrinsic"
                  width={469}
                  height={457}
                />
              </div>
              <Link href="/link-pago">
                <a className={ `btn btn-amarillo ${ styles.btn }` }>Lo quiero</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={`panel ${ styles.pasarela_de_pago }`}>
          <div className="site-inner-wrap column-container has-2-cols">
            <div className={`column ${ styles.pasarela_de_pago_image }`}>
              <Image 
                src="/images/pasarela-pago.png"
                alt="Link de pago puntopay"
                layout="intrinsic"
                width={469}
                height={457}
              />
            </div>
            <div className={`column ${ styles.pasarela_de_pago_text }`}>
              <h2>¿Cómo funciona una pasarela de pagos?</h2>
              <p>Si ya tienes una página web con tus productos, implementa nuestra pasarela de pagos para que puedas vender y cobrar desde tu sitio web.</p>
              <p>Si no tienes página web no importa, nosotros la creamos por ti con la pasarela de pagos Puntopay.</p>
              <div className={`column-container has-2-cols ${ styles.pasarela_btn_container }`}>
                <div className={`column ${ styles.pasarela_btn_col }`}>
                  <Link href="/pasarela-pago">
                    <a className={`btn btn-amarillo ${ styles.btn }`}>Activar la pasarela en mi página web.</a>
                  </Link>
                </div>
                <div className={`column ${ styles.pasarela_btn_col }`}>
                  <Link href="/tienda-virtual">
                    <a className={`btn btn-verde ${ styles.btn }`}>Quiero una tienda virtual con pasarela.</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-gradient-vam panel ${ styles.datafono }`}>
          <div className={ `site-inner-wrap column-container has-2-cols` }>
            <div className={ `column ${ styles.datafono_ilustracion }` }>
              <Image 
                  src="/images/datafono-01.png"
                  alt="Paga con Visa, Mastercard o PSE"
                  layout="fixed"
                  height={ 600 }
                  width={ 450 }
              />
            </div>
            <div className={ `column ${ styles.datafono_texto }` }>
                <h2 className="font-color-amarillo">Datáfono Puntopay</h2>
                <p>Recibe pagos con tarjetas débito y crédito sin contacto o con chip usando tu propio datáfono Puntopay.</p>
                <ul>
                  <li>Sin contratos ni alquileres</li>
                  <li>Sin cuotas mensuales</li>
                  <li>Sin mínimos de transacciones</li>
                  <li>Solo pagas por venta realizada</li>
                  <li>Incluye material publicitario</li>
                </ul>
                <Link href="https://tiendapuntored.viveshops.co/">
                  <a className={`btn btn-amarillo ${ styles.btn }`}>Quiero mi datáfono</a>
                </Link>
                <Link href="#">
                  <a className={`btn btn-blanco ${ styles.btn }`}>¿Cómo activo mi datáfono?</a>
                </Link>
            </div>
          </div>
        </div>
        <div className={ styles.app_stores }>
          <div className="site-inner-wrap">
            <h2>¿Listo para empezar con Puntopay?</h2>
            <p>Descarga ya la app de Puntopay en</p>
            <div className={`column-container has-3-cols ${ styles.app_stores_btn_container }`}>
              <div className={`column ${ styles.btn_store }`}>
                <Link href="https://play.google.com/store/apps/details?id=co.puntored.puntopay&referrer=utm_source%3DFenalco_Asamblea%26utm_medium%3Dcorreo_elctronico%26utm_term%3DAsamblea%2520de%2520Afiliados%26utm_content%3DDescarga_Puntopay">
                  <a target="_blank"><GooglePlay/></a>
                </Link>
              </div>
              <div className={`column ${ styles.btn_store }`}>
                <Link href="https://appgallery.huawei.com/#/app/C103225781?channelId=browser&detailType=0">
                  <a target="_blank"><AppGallery/></a>
                </Link>
              </div>
              <div className={`column ${ styles.btn_store }`}>
                <Link href="https://apps.apple.com/co/app/puntopay/id1524854395">
                  <a target="_blank"><AppleStore/></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
