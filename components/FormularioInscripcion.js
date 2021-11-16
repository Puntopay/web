import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import CiudadesColombia from '../content/ciudades-colombia.json'

const FormularioInscripcion = () => {

    const [ ciudades, setCiudades ] = useState([])
    const [ errorDepto, setErrorDepto ] = useState( false )
    const [ asesor, setAsesor ] = useState( false )
    const [ respuestaFormulario, setRespuestaFormulario ] = useState({
        estado: '',
        mensaje: ''
    })

    const enviarRegistro = async values => {
        
        try{
            const response = await fetch( 'https://puntopay.preprodcxr.co/users', {
                method: 'POST',
                headers: {"Content-type": "application/json; charset=UTF-8"},
                body: JSON.stringify( values )
            } )
            console.log( response )
            if( response.status === 200 ){
                setRespuestaFormulario({
                    ...respuestaFormulario,
                    estado: 'Registro realizado',
                    mensaje: 'El registro se ha realizado exitosamente. Si tiene alguna duda por favor pongase en contacto con nosotros.'
                })
            }
            else if( response.status === 409 ){
                setRespuestaFormulario({
                    ...respuestaFormulario,
                    estado: 'Error en el registro',
                    mensaje: 'Este usuario ya se encuentra registrado'
                })
            }
            else if( response.status === 400 ){
                setRespuestaFormulario({
                    ...respuestaFormulario,
                    estado: 'Error en el registro',
                    mensaje: response.data.errors[0]
                })
            }
            else if( response.status === 500 ){
                setRespuestaFormulario({
                    ...respuestaFormulario,
                    estado: 'Error en el registro',
                    mensaje: 'Existe un error en los datos enviados, por favor contáctese con nosotros.'
                })
            }
        }catch( err ){
            console.log( 'Error!', err )
        }

    }
    
    const formik = useFormik({
        initialValues:{
            name: '',
            lastname: '',
            email: '',
            mobile: '',
            identification_type_id: '',
            identification: '',
            password: '',
            password_confirmation: '',
            country: 'Colombia',
            dane_city_id: 0,
            address: '',
            neighborhood: '',
            zip_code: '',
            reference_id: 0,
            referral_mobile: '',
            tratamiento_datos: false
        },
        validationSchema: Yup.object({
            name: Yup.string().min( 3, 'El nombre es muy corto').max( 50, 'El nombre es muy largo' ).required('El nombre es obligatorio'),
            lastname: Yup.string().min( 3, 'El apellido es muy corto').max( 50, 'El apellido es muy largo' ).required('El apellido es obligatorio'),
            email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
            identification_type_id: Yup.number().required('Debe elegir un tipo de documento'),
            identification: Yup.number().required('El número de documento es requerido'),
            mobile: Yup.number().positive().required('El número de móvil es requerido'),
            dane_city_id: Yup.number().required('La ciudad es requerida'),
            tratamiento_datos: Yup.boolean().oneOf( [true], 'Debe aceptar la política de tratamiento de datos' ),
            reference_id: Yup.number().required('cuéntanos cómo nos conociste'),
            referral_mobile: Yup.number().when( 'reference_id', {
                is: 1,
                then: Yup.number().required('El número del asesor es requerido')
            } )
        }),
        onSubmit: user => {
            const formatValues = {
                user
            }
            console.log( formatValues )
            enviarRegistro( formatValues )
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

    const celAsesor = ( e ) => {
        const valor = e.target.value
        if( valor === "1" ){
            setAsesor( true )
        }else{
            setAsesor( false )
        }
    }

    const { estado, mensaje } = respuestaFormulario
    
    return(
        
        estado == "" 
        ?
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
                        onBlur={ e => {
                            let passWord = e.target.value.substr(-4)
                            formik.handleBlur
                            formik.setFieldValue( 'password', passWord )
                            formik.setFieldValue( 'password_confirmation', passWord )
                        } } 
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
                            value={ formik.values.dane_city_id }
                            onChange={ formik.handleChange } 
                            onBlur={ formik.handleBlur }
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
                    <select 
                        name="reference_id"
                        className="select"
                        value={ formik.values.reference_id }
                        onChange={ ( e ) => {
                            celAsesor( e )
                            formik.handleChange( e ) 
                        } }
                        onBlur={ formik.handleBlur }
                    >
                        <option value="">¿Cómo te enteraste de nosotros?</option>
                        <option value="1">Asesor Comercial</option>
                        <option value="2">Redes Sociales</option>
                        <option value="3">Voz a voz</option>
                        <option value="4">Alianzas</option>
                        <option value="5">Radio</option>
                        <option value="6">Prensa</option>
                        <option value="7">Tv</option>
                    </select>
                    { ( formik.touched.reference_id && formik.errors.reference_id ) && <p className="form-error">{ formik.errors.reference_id }</p> }
                </div>
                {
                    asesor &&
                        <div className="puntopay-item-container">
                            <input 
                                type="number"
                                name="referral_mobile"
                                placeholder="Número celular del asesor comercial"
                                id="referral_mobile"
                                className="input"
                                value={ formik.values.referral_mobile }
                                onChange={ formik.handleChange } 
                                onBlur={ formik.handleBlur } 
                            />
                            { ( formik.touched.referral_mobile && formik.errors.referral_mobile ) && <p className="form-error">{ formik.errors.referral_mobile }</p> }
                        </div> 
                }
                <div className="puntopay-item-container">
                    <input 
                        type="checkbox" 
                        name="tratamiento_datos"
                        value={ formik.values.tratamiento_datos }
                        onChange={ formik.handleChange } 
                    /> Acepto la politica de tratamiento de datos
                    { ( formik.touched.tratamiento_datos && formik.errors.tratamiento_datos ) && <p className="form-error">{ formik.errors.tratamiento_datos }</p> }
                </div>
                <div className="puntopay-item-container">
                    <button 
                        type="submit"
                        className="btn-form"
                    >Registrarme en Puntopay</button>
                </div>
            </form>
        :
            <div className={ `form_respuesta ${ estado === 'Error en el registro' && "form_error" }` }>
                <h2>{ estado }</h2>
                <p>{ mensaje }</p>
            </div>
    )
}

export default FormularioInscripcion