import { useState } from 'react'
import MediaQuery from 'react-responsive'
import Link from 'next/link'

import Logo from '../public/images/logo.svg'
import Whatsapp from '../public/images/whatsapp.svg'

import styles from '../styles/components/Header.module.scss'



const Header = () => {

    const [ estadoSubmenu, setEstadoSubmenu ] = useState( false )
    const [ mostrarOcultarMenu, setMostrarOcultarMenu ] = useState( false )

    const mostrarOcultar = () => {
        if( ! estadoSubmenu ){
            setEstadoSubmenu( true )
        }else{
            setEstadoSubmenu( false )
        }
    }

    const showMenu = () => {

        if( ! mostrarOcultarMenu ){
            setMostrarOcultarMenu( true )
        }else{
            setMostrarOcultarMenu( false )
        }

    }

    console.log( estadoSubmenu )
    
    return(
        <header className={ styles.header }>
            <div className={ `site-inner-wrap ${ styles.site_inner_wrap }` }>
                <figure className={ styles.header_logo_container }>
                    <Link href="/">
                        <a><Logo /></a>
                    </Link>
                </figure>
                <nav className={ styles.header_main_nav }>
                    <MediaQuery maxDeviceWidth={ 415 } orientation='portrait'>
                        <div 
                            className={ `${ styles.header_main_nav_button } ${ mostrarOcultarMenu && styles.cerrar }` }
                            onClick={ () => showMenu() }
                        >
                            <span className={ `${ styles.line } ${ styles.line_one }` }></span>
                            <span className={ `${ styles.line } ${ styles.line_two }` }></span>
                            <span className={ `${ styles.line } ${ styles.line_three }` }></span>
                        </div>
                        <ul className={ `menu ${ styles.menu } ${ mostrarOcultarMenu && styles.mostrar  }` }>
                            <li>
                                <Link href="/puntopay">
                                    <a onClick={ () => setMostrarOcultarMenu( false ) }>Nosotros</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tienda-virtual">
                                    <a onClick={ () => setMostrarOcultarMenu( false ) }>Tienda Virtual</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/link-pago">
                                    <a onClick={ () => setMostrarOcultarMenu( false ) }>Link de pago</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pasarela-pago">
                                    <a onClick={ () => setMostrarOcultarMenu( false ) }>Pasarela de pago</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/datafono">
                                    <a onClick={ () => setMostrarOcultarMenu( false ) }>Datáfono</a>
                                </Link>
                            </li>
                            <li className={ styles.menu_icon }>
                                <Link href="#">
                                    <a><Whatsapp /><span>Asesor de ventas</span></a>
                                </Link>
                            </li>
                        </ul>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={ 768 }>
                        <ul className={ `menu ${ styles.menu }` }>
                            <li>
                                <Link href="/puntopay">
                                    <a>Nosotros</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a onClick={ () => mostrarOcultar() }>Medios de pago</a>
                                </Link>

                                <ul className={ estadoSubmenu ?  `menu ${ styles.sub_menu } ${ styles.mostrar }` : `menu ${ styles.sub_menu }`  }>
                                    <li>
                                        <Link href="/tienda-virtual">
                                            <a onClick={ () => setEstadoSubmenu( false ) }>Tienda Virtual</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/link-pago">
                                            <a onClick={ () => setEstadoSubmenu( false ) }>Link de pago</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pasarela-pago">
                                            <a onClick={ () => setEstadoSubmenu( false ) }>Pasarela de pago</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/datafono">
                                            <a onClick={ () => setEstadoSubmenu( false ) }>Datáfono</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/preguntas-frecuentes">
                                    <a>¿Necesitas ayuda?</a>
                                </Link>
                            </li>
                            <li className={ styles.menu_icon }>
                                <Link href="#">
                                    <a><Whatsapp /><span>Asesor de ventas</span></a>
                                </Link>
                            </li>
                        </ul>
                    </MediaQuery>
                </nav>
            </div>
        </header>
    )

}

export default Header