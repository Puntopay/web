import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import CiudadesColombia from '../content/ciudades-colombia.json'

const FormularioInscripcion = () => {

    const [ ciudades, setCiudades ] = useState([])
    const [ errorDepto, setErrorDepto ] = useState( false )
    
    const formik = useFormik({
        initialValues:{
            name: '',
            lastname: '',
            email: '',
            mobile: '',
            country: 'Colombia',
            identification_type_id: '',
            identification: '',
            password: '',
            password_confirmation: '',
            code: 0,
            address: '',
            neighborhood: '',
            zip_code: '',
            dane_city_id: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min( 3, 'El nombre es muy corto').max( 50, 'El nombre es muy largo' ).required('El nombre es obligatorio'),
            lastname: Yup.string().min( 3, 'El apellido es muy corto').max( 50, 'El apellido es muy largo' ).required('El apellido es obligatorio'),
            email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
            identification_type_id: Yup.number().required('Debe elegir un tipo de documento'),
            identification: Yup.number().required('El número de documento es requerido'),
            mobile: Yup.number().positive().required('El número de móvil es requerido'),
            dane_city_id: Yup.number().required('La ciudad es requerida'),
        }),
        onSubmit: () => {
            console.log( 'enviando...' )
        }
    })

    const obtenerCiudades = deptoKey => {

        if( deptoKey === '' ){
            setErrorDepto( true )
            setCiudades( [] )
            return
        }

        setErrorDepto( false )
        const keyCiudad = Object.keys( CiudadesColombia.colombia[ deptoKey ].depto )
        setCiudades( CiudadesColombia.colombia[ deptoKey ].depto[ keyCiudad ] )

    }
    
    return(
        <form
            className="form ancho-80 center"
            onSubmit={ formik.handleSubmit }
        >
            <div className="puntopay-item-container">
                <input 
                    type="text"
                    name="name" 
                    placeholder="Nombres"
                    id="nombre"
                    className="input"
                    value={ formik.values.name }
                    onChange={ formik.handleChange } 
                    onBlur={ formik.handleBlur }
                />
                { ( formik.touched.name && formik.errors.name ) && <p className="form-error">{ formik.errors.name }</p> }
            </div>
            <div className="puntopay-item-container">
                <input 
                    type="text"
                    name="lastname" 
                    placeholder="Apellidos"
                    id="apellidos"
                    className="input"
                    value={ formik.values.lastname }
                    onChange={ formik.handleChange } 
                    onBlur={ formik.handleBlur }
                />
                { ( formik.touched.lastname && formik.errors.lastname ) && <p className="form-error">{ formik.errors.lastname }</p> }
            </div>
            <div className="puntopay-item-container">
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    className="input"
                    value={ formik.values.email }
                    onChange={ formik.handleChange } 
                    onBlur={ formik.handleBlur } 
                />
                { ( formik.touched.email && formik.errors.email ) && <p className="form-error">{ formik.errors.email }</p> }
            </div>
            <div className="puntopay-item-container">
                <select 
                    id="cedula" 
                    name="identification_type_id"
                    className="select"
                    value={ formik.values.identification_type_id }
                    onChange={ formik.handleChange } 
                    onBlur={ formik.handleBlur }
                >
                    <option value="">-- Tipo de documento --</option>
                    <option value="0">Cédula de ciudadanía</option>
                    <option value="2">Cédula de extranjería</option>
                </select>
                { ( formik.touched.identification_type_id && formik.errors.identification_type_id ) && <p className="form-error">{ formik.errors.identification_type_id }</p> }
            </div>
            <div className="puntopay-item-container">
                <input 
                    type="number"
                    name="identification" 
                    placeholder="Número de documento"
                    id="numero_documento"
                    className="input"
                    value={ formik.values.identification }
                    onChange={ formik.handleChange } 
                    onBlur={ formik.handleBlur } 
                />
                { ( formik.touched.identification && formik.errors.identification ) && <p className="form-error">{ formik.errors.identification }</p> }
            </div>
            <div className="puntopay-item-container">
                <input 
                    type="number"
                    name="mobile" 
                    placeholder="Número celular"
                    id="numero_celular"
                    className="input"
                    value={ formik.values.mobile }
                    onChange={ formik.handleChange } 
                    onBlur={ formik.handleBlur } 
                />
                { ( formik.touched.mobile && formik.errors.mobile ) && <p className="form-error">{ formik.errors.mobile }</p> }
            </div>
            <div className="puntopay-item-container">
                <select 
                    id="departamento" 
                    name="departamento"
                    className="select"
                    onChange={ ( e ) => obtenerCiudades( e.target.value ) }
                    onBlur={ ( e ) => obtenerCiudades( e.target.value ) }
                >
                    <option value="">-- Elije un departamento --</option>
                    { CiudadesColombia.colombia.map( ( depto, idx ) => (
                        <option key={ idx } value={ idx }>{ Object.keys( depto.depto ) }</option>
                    ) ) }
                </select>
                { errorDepto && <p className="form-error">{ 'El departamento es un campo obligatorio' }</p> }    
            </div>
            { ciudades != "" && (
                <div className="puntopay-item-container">
                    <select
                        id="dane_city_id" 
                        name="dane_city_id"
                        className="select"
                    >
                        <option value="">-- Elije una ciudad --</option>
                        { ciudades && ciudades.map( ( city, indx ) => (
                            <option key={ indx } value={ city.codigo }>{ city.ciudad }</option>
                        ) ) }
                    </select>
                    { ( formik.touched.dane_city_id && formik.errors.dane_city_id ) && <p className="form-error">{ formik.errors.dane_city_id }</p> }
                </div>
            ) }
            
            <div className="puntopay-item-container">
                <button 
                    type="submit"
                    className="btn-form"
                >Registrarme en Puntopay</button>
            </div>
        </form>
    )
}

export default FormularioInscripcion