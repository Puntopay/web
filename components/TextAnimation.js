import { useEffect, useState } from 'react'
import styles from '../styles/components/TextAnimation.module.scss'

const TextAnimation = () => {
    
    //Array de palabras a mostrar
    const arrayWords = [ 'Tienda virtual', 'Pago digital', 'Datafono' ]
    
    //States con la palabra actual y el selector de palabra en el array
    const [ wordSelector, setWordSelector ] = useState( 0 );
    const [ sentence, setSentence ] = useState( arrayWords[ wordSelector ] )

    useEffect( () => {

        const interval = setInterval( () => {
            
            //console.log( wordSelector )
            console.log( sentence )
            
            setSentence( arrayWords[ wordSelector ] )
            setWordSelector( wordSelector + 1 )
            
            if( wordSelector >= arrayWords.length - 1 ){
                setWordSelector( 0 )
            }

        }, 6000 );
        
        return () => clearInterval( interval );

    }, [ wordSelector ] )

    let textArray = sentence.split('')
    
    return <span className={ styles.texto }>{ sentence }</span>
}

export default TextAnimation