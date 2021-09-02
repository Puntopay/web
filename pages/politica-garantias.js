import Head from 'next/head'
import parse from 'html-react-parser';

import Politicas from '../content/politicas.json'

const PoliticaGarantias = () => {

    const { titulo, contenido } = Politicas.garantias
    
    return(
        <>
            <Head>
                <title>Política de Garantías</title>
                <meta name="description" content="Conocer las directrices principales concernientes a la gestión de garantías ofrecidas y/o devoluciones de los datáfonos vendidos por Puntopay." />
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

export default PoliticaGarantias