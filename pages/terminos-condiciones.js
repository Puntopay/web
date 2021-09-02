import Head from 'next/head'
import parse from 'html-react-parser';

import Politicas from '../content/politicas.json'

const TerminosCondiciones = () => {

    const { titulo, contenido } = Politicas.terminos

    return(
        <>
            <Head>
                <title>Términos y condiciones de uso Puntopay</title>
                <meta name="description" content="Términos y condiciones de uso Puntopay S.A.S." />
            </Head>
            <main className="main-body politicas-body">
                <div className="politicas-cabecera">
                    <h1>{ titulo }</h1>
                </div>
                <article  className="politicas-contenido">
                    { parse( contenido ) }
                </article>
            </main>
        </>
    )

}

export default TerminosCondiciones