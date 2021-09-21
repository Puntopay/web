import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const Carga = ({ src, height = null, width = null, quality }) => {
    return `../images/${ src }?${ width && `w=${ width }&` }${ height && `h=${ height }&` }q=${ quality || 75 }`
}

const DatafonoSlider = () => {
    
    const timer = useRef()

    const [ sliderRef, slider ] = useKeenSlider({
        initial: 0,
        loop: true,
        duration: 2000,
    })

    useEffect( () => {

        timer.current = setInterval( () => {
            if ( slider ) {
              slider.next()
            }
        }, 4000 )
        return () => {
            clearInterval( timer.current )
        }

    }, [ slider ] );
    
    return(
        <div ref={ sliderRef } className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <Image 
                    loader={ Carga }
                    src='carrusel-01.png'
                    alt="Datafono punto pay"
                    height={ 485 }
                    width={ 485 }
                    layout="responsive"
                />
            </div>
            <div className="keen-slider__slide number-slide2">
                <Image 
                    loader={ Carga }
                    src='carrusel-02.png'
                    alt="Datafono punto pay"
                    height={ 485 }
                    width={ 485 }
                    layout="responsive"
                />
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image 
                    loader={ Carga }
                    src='carrusel-03.png'
                    alt="Datafono punto pay"
                    height={ 485 }
                    width={ 485 }
                    layout="responsive"
                />
            </div>
            <div className="keen-slider__slide number-slide4">
                <Image 
                    loader={ Carga }
                    src='carrusel-04.png'
                    alt="Datafono punto pay"
                    height={ 485 }
                    width={ 485 }
                    layout="responsive"
                />
            </div>
            <div className="keen-slider__slide number-slide5">
                <Image 
                    loader={ Carga }
                    src='carrusel-05.png'
                    alt="Datafono punto pay"
                    height={ 485 }
                    width={ 485 }
                    layout="responsive"
                />
            </div>
        </div>
    )

}

export default DatafonoSlider