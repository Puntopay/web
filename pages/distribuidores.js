import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import CheckList from '../public/images/checklist.svg'
import PasarelaPagos from '../public/images/pasarela-pagos-tienda-virtual.svg'

import styles from '../styles/paginas/Distribuidores.module.scss'

const Distribuidores = () => {

    return(
        <>
            <Head>
                <title>Distribuidores | Puntopay</title>
                <meta name="description" content="Empieza a vender por internet desde donde te encuentres." />
            </Head>
            <main>
                <div className="full-size banner_home">
                    <div className="banner_image_container">
                        <Image 
                            src="/images/distribuidores-banner.png"
                            alt="Puntopay, distribuidores autorizados"
                            layout="fill"
                            objectFit="cover"
                            quality={ 100 }
                        />
                    </div>
                    <div className="banner_text_container">
                        <div className="banner_text_wrap">
                        <h2 className="font-color-magenta">Conviertete en distribuidor autorizado Puntopay.</h2>
                        <p>Llévale Puntopay a todos los comercios que no aceptan tarjeta en sus negocios.</p>
                        </div>
                    </div>
                </div>
                <div className={ `panel ${ styles.programa_container }` }>
                    <h2 className="ancho-60 text-center center">Conoce nuestro programa de recompensas.</h2>
                    <div className="ancho-50 center column-container has-3-cols">
                        <div className={ `column ${ styles.programa_col }` }>
                            <div className={ `${styles.programa_tabla} ${styles.tabla_verde}` }>
                                <h3>Emprendedor</h3>
                                <p className="small-font">Gana mensual hasta*</p>
                                <p className={ styles.costo }>$200.000</p>
                            </div>
                        </div>
                        <div className={ `column ${ styles.programa_col }` }>
                            <div className={ `${styles.programa_tabla} ${styles.tabla_azul}` }>
                                <h3>Inversor</h3>
                                <p className="small-font">Gana mensual hasta*</p>
                                <p className={ styles.costo }>$1.000.000</p>
                            </div>
                        </div>
                        <div className={ `column ${ styles.programa_col }` }>
                            <div className={ `${styles.programa_tabla} ${styles.tabla_magenta}` }>
                                <h3>Empresario</h3>
                                <p className="small-font">Gana mensual hasta*</p>
                                <p className={ styles.costo }>$3.000.000</p>
                            </div>
                        </div>
                    </div>
                    <p className="small-font text-center">*Aplican condiciones y restricciones</p>
                </div>
                <div className={`panel bg-gray ${ styles.ganancias_panel }`}>
                    <div className="site-inner-wrap">
                        <h2 className="text-center font-color-deep-blue">Calcula tus ganancias</h2>
                        <table>
                            <tr>
                                <th>Vende</th>
                                <th>Precio full c/u</th>
                                <th>Porcentaje</th>
                                <th>Descuento c/u</th>
                                <th>Precio final c/u</th>
                            </tr>
                            <tr>
                                <td>100</td>
                                <td>89000</td>
                                <td>40%</td>
                                <td>$35.600</td>
                                <td>$53.400</td>
                            </tr>
                            <tr>
                                <td>50</td>
                                <td> - </td>
                                <td>35%</td>
                                <td>$31.150</td>
                                <td>$57.850</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td> - </td>
                                <td>25%</td>
                                <td>$22.250</td>
                                <td>$66.750</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td> - </td>
                                <td>10%</td>
                                <td>$8.900</td>
                                <td>$80.100</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="font-color-magenta text-center">¿Cómo ser distribuidor Puntopay?</h2>
                    <p className="text-center ancho-60 center">Déjanos tus datos para iniciar tu proceso como distibuidor</p>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeWuc0ca9kdM3aHaQdpbkVPv35BSYFM3NAkIx13BBOAB83vVA/viewform">
                        <a className="btn btn-verde btn-center" target="_blank">Postularme como distribuidor</a>
                    </Link>
                </div>
            </main>
        </>
    )

}

export default Distribuidores