import { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/components/Header.module.scss'

import Logo from '../public/images/logo.svg'


const Header = () => {

    const [ estadoSubmenu, setEstadoSubmenu ] = useState( false )

    const mostrarOcultar = () => {
        if( ! estadoSubmenu ){
            setEstadoSubmenu( true )
        }else{
            setEstadoSubmenu( false )
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
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header