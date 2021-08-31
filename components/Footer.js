import Link from 'next/link'
import Logo from '../public/images/logo.svg'

import styles from '../styles/components/Footer.module.scss'
import Facebook from '../public/images/facebook.svg'
import Instagram from '../public/images/instagram.svg'
import Youtube from '../public/images/youtube.svg'

const Footer = () => {

    return(
        <footer className={ `bg-gradient-vam ${ styles.footer }` }>
            <div className={`site-inner-wrap ${ styles.site_inner_wrap }`}>
                <div className={ styles.footer_column }>
                    <figure className={ styles.footer_logo }>
                        <Logo />
                    </figure>
                    <p>Calle 100 No 19 – 61, piso 9<br />
                    Edificio Empresarial Calle 100, Bogotá<br />
                    310 233 6354 / sac@puntopay.co</p>
                </div>
                <div className={ styles.footer_column }>
                    <ul className={`menu ${ styles.menu } ${ styles.footer_menu }`}>
                        <li>
                            <Link href="#">
                                <a>Políticas</a>
                            </Link></li>
                        <li>
                            <Link href="#">
                                <a>Aviso de privacidad</a>
                            </Link></li>
                        <li>
                            <Link href="#">
                                <a>Condiciones de uso</a>
                            </Link></li>
                        <li>
                            <Link href="https://docs.google.com/forms/d/1A95dIpEkj-CzPpXnKca5OVHJtEktagKG-BOpGl-A1Rg/viewform?edit_requested=true&gxids=7628">
                                <a target="_blank">Línea ética</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={ styles.footer_column }>
                    <ul className={`menu ${ styles.menu } ${ styles.footer_menu }`}>
                        <li>
                            <Link href="/tienda-virtual">
                                <a>Tienda virtual</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/link-pago">
                                <a>Link de pago</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pasarela-pago">
                                <a>Pasarela de pago</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/datafono">
                                <a>Datáfono</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={ styles.footer_column }>
                    <ul className={`menu ${ styles.menu } ${ styles.footer_menu }`}>
                        <li>
                            <Link href="/puntopay">
                                <a>Registrarse</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/distribuidores">
                                <a>Quiero vender Putopay</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={ styles.footer_column }>
                    <p className="text-center">Únete a la conversación</p>
                    <ul className={ `column-container has-3-cols ${ styles.redes_sociales }` }>
                        <li className="column">
                            <Link href="https://www.facebook.com/puntopaycolombia/">
                                <a target="_blank"><Facebook /></a>
                            </Link>
                        </li>
                        <li className="column">
                            <Link href="https://www.instagram.com/puntopaycolombia/">
                                <a target="_blank"><Instagram /></a>
                            </Link>
                        </li>
                        <li className="column">
                            <Link href="https://www.youtube.com/channel/UC8TGu45eJS01z_h0ZACO3fQ?app=desktop">
                                <a target="_blank"><Youtube /></a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="#">
                        <a className={ styles.blog_link }>Blog Puntopay</a>
                    </Link>
                </div>
            </div>
            <div className={ styles.footer_copy }>
                Copyright © { new Date().getFullYear() } Puntopay S.A.S
            </div>
        </footer>
    )

}

export default Footer