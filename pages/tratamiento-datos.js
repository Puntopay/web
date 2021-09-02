import Head from 'next/head'
import parse from 'html-react-parser';

import Politicas from '../content/politicas.json'

const TratamientoDatos = () => {

    const { titulo, contenido } = Politicas.privacidad
    
    return(
        <>
            <Head>
                <title>Política de tratamiento de datos personales</title>
                <meta name="description" content="Comprometida con la importancia que tiene la adecuada administración de la información y el cumplimiento de la ley 1581 de 2012" />
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

export default TratamientoDatos