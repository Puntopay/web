import Head from 'next/head'


const PreguntasFrecuentes = () => {
    return(
        <>
            <Head>
                <title>¿Preguntas Frecuentes?</title>
                <meta name="description" content="Puntopay es la solución de medios de pago digitales." />
            </Head>
            <main className="mobile-top-padding">
                <div className="site-inner-wrap panel">
                    <h2 className="text-center font-color-magenta">¿Cómo podemos ayudarte?</h2>
                    <div className="column">
                        <ul className="acordeon">
                            <li>
                                <input type="checkbox" id="list-item-1" />
                                <label htmlFor="list-item-1" className="first">¿Qué puedes hacer con tu dinero en Puntopay?</label>
                                <div className="acordeon-content">
                                    <ul>
                                        <li>Pagar Facturas de Servicios Públicos y Privados (Tenemos más de 12.000 convenios)</li>
                                        <li>Recargar tu Celular Prepago</li>
                                        <li>Comprar Paquetes de Voz y Datos de los principales operadores móviles</li>
                                        <li>Pagar a proveedores</li>
                                        <li>acceder a sobregiro</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-2" />
                                <label htmlFor="list-item-2">¿Cómo activo Puntopay?</label>
                                <div className="acordeon-content">
                                    <p>Ingresa a Google Play, Apple Store o App Gallery, descarga la App y regístrate siguiendo los siguientes pasos:</p>
                                    <ul>
                                        <li>Selecciona tu tipo de documento</li>
                                    </ul>
                                    <p>Digita tu:</p>
                                    <ul>
                                        <li>Número de identificación</li>
                                        <li>Nombres</li>
                                        <li>Apellidos</li>
                                        <li>No. de Celular</li>
                                        <li>Correo electrónico</li>
                                        <li>dirección física</li>
                                    </ul>
                                    <p>Acepta los términos, condiciones y políticas de tratamiento de datos, y asigna una clave de 4 dígitos.</p>
                                    <p><strong>Nota:</strong> Recuerda “El número de tu cuenta es tu celular”.</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-3" />
                                <label htmlFor="list-item-3">No me llega el código de confirmación al crearla. ¿qué hago?</label>
                                <div className="acordeon-content">
                                    <p>Primero verifica que digitaste bien tus datos, si es así, el motivo más común es la comunicación con el operador móvil, espera un poco o realiza el proceso nuevamente más tarde. Si persiste el problema comunícate con nosotros al correo: sac@puntopay.co con tu nombre completo, número de celular y cédula.</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-4" />
                                <label htmlFor="list-item-4">¿Cómo recupero mi contraseña?</label>
                                <div className="acordeon-content">
                                    <p>Abre la App, dale clic en Olvidaste Contraseña, Ingresa el correo registrado para que recibas las instrucciones para restablecer tu contraseña. Sigue los pasos y ¡Listo!</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-5" />
                                <label htmlFor="list-item-5">Quiero cambiar mi contraseña</label>
                                <div className="acordeon-content">
                                    <p>Si deseas cambiar tu contraseña ingresa a tu perfil (Icono superior derecho) Selecciona Cambio de clave, Ingresa tu clave actual y la nueva que deseas y ¡Listo!</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-6" />
                                <label htmlFor="list-item-6">¿Cómo actualizo o cambio de número celular?</label>
                                <div className="acordeon-content">
                                    <p>En Puntopay, tu número de celular es tu número de cuenta. Para poder cambiar el número de celular con el que creaste la cuenta, envía un correo a sac@puntopay.co indicando tu solicitud y adjuntando la última factura de tu plan para poder validar que la línea efectivamente sea tuya.</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-7" />
                                <label htmlFor="list-item-7">¿Cómo cancelar mi cuenta?</label>
                                <div className="acordeon-content">
                                    <p>Puedes cancelar tu cuenta en cualquier momento, solo tienes que enviar un correo a sac@puntopay.co con los siguientes datos:</p>
                                    <ul>
                                        <li>Nombre completo</li>
                                        <li>Número de celular</li>
                                        <li>Número del documento de identidad o cédula de extranjería</li>
                                        <li>Tu cuenta debe estar en $0 o tienes que autorizarnos a eliminarla con el dinero que tengas (autorización por correo).</li>
                                        <li>Tu cuenta antigua quedará bloqueada y no podrás usarla.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-8" />
                                <label htmlFor="list-item-8">¿Cómo puedo cargar dinero con PSE?</label>
                                <div className="acordeon-content">
                                    <p>PSE es la plataforma virtual que te permite hacer transacciones y/o movimientos en línea desde tu cuenta de ahorros de cualquier banco. Puedes cargar plata en tu cuenta Puntopay desde una cuenta de ahorros por PSE desde $1.000 en adelante.</p>
                                    <ul>
                                        <li>Abre el App Puntopay</li>
                                        <li>Ingresar a la pestaña de Saldo total disponible</li>
                                        <li>En saldo en cuenta, CargarSaldo</li>
                                        <li>Selecciona Tarjeta débito</li>
                                        <li>Ingresa el banco</li>
                                        <li>Selecciona el Tipo de persona</li>
                                        <li>Agrega el valor a cargar</li>
                                        <li>Confirma tu usuario y correo en la plataforma de PSE</li>
                                        <li>Confirma tu usuario y clave de tu banco</li>
                                        <li>Confirma una vez más que el monto que quieres cargar y todo lo demás está ok.</li>
                                        <li>Finaliza la transacción</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-9" />
                                <label htmlFor="list-item-9">¿Cómo puedo inscribir mi cuenta bancaria?</label>
                                <div className="acordeon-content">
                                    <p>Puedes agregar una cuenta bancaria para recargar saldo Puntopay. Para hacerlo, ingresa a tu perfil en la parte superior derecha y selecciona la opción “Cuenta bancaria”. Registra los siguientes datos:</p>
                                    <ul>
                                        <li>Banco</li>                      
                                        <li>Tipo de cuenta</li> 
                                        <li>No. de cuenta</li> 
                                        <li>Tipo de persona</li> 
                                        <li>Tipo de documento</li> 
                                        <li>No. de documento</li> 
                                        <li>Establece una Contraseña</li> 

                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-10" />
                                <label htmlFor="list-item-10">¿Cómo puedo cambiar cuenta bancaria?</label>
                                <div className="acordeon-content">
                                    <p>Para realizar cambio de tu cuenta bancaria inscrita, debes enviarnos la certificación bancaria al correo sac@puntopay.co </p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-11" />
                                <label htmlFor="list-item-11">¿Cómo puedo retirar el dinero de mi cuenta Puntopay a mi cuenta bancaria?</label>
                                <div className="acordeon-content">
                                    <p>Puedes retirar todo el dinero de tu cuenta cuando desees, no existen topes.</p>
                                    <ul>
                                        <li>Abre el App Puntopay</li>
                                        <li>Ingresar a la pestaña de Saldo total disponible</li>
                                        <li>En Dinero por retirar verás el saldo disponible que puedes sacar, selecciona Retirar</li>
                                        <li>Selecciona el banco</li>
                                        <li>Tipo de cuenta</li>
                                        <li>No. de cuenta</li>
                                        <li>Tipo de persona</li>
                                        <li>Tipo de documento</li>
                                        <li>No. de documento</li>
                                        <li>Establece una Contraseña</li>
                                        <li>Ingresa el monto a retirar</li>
                                    </ul>
                                    <p>Si ya inscribiste la cuenta anteriormente, sigue los siguientes pasos.</p>
                                    <ul>
                                        <li>Abre el App Puntopay</li>
                                        <li>Ingresar a la pestaña de Saldo total Disponible</li>
                                        <li>En Dinero por retirar verás el saldo disponible que puedes mover a tu cuenta bancaria, selecciona “Programar retiro”</li>
                                        <li>Ingresa el monto a retirar</li>
                                    </ul>
                                    <p>Tu dinero será compensado en tu cuenta bancaria los días lunes, miércoles o viernes, dependiendo del día en que hagas la solicitud. </p>
                                    <p>Podrás ver el saldo que programaste retirar en la pestaña “Saldo en canje”. .</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-12" />
                                <label htmlFor="list-item-12">Tengo problemas para activar el Link de Pago</label>
                                <div className="acordeon-content">
                                    <p>Si completas los pasos para activar el Link de Pago, pero el servicio no quedó activado inténtalo de nuevo, es posible que el reconocimiento facial o de la cédula no hayan sido claras; por ello intenta seguir las instrucciones:</p>
                                    <ul>
                                        <li>La foto frontal debe ser en un fondo unicolor, con luz clara</li>
                                        <li>Recuerda quitarte los accesorios como lentes y gorras.</li>
                                        <li>Evita que la foto salga borrosa</li>
                                        <li>La cédula no puede estar borrosa ni oscura</li>
                                        <li>Evita que se vean los hologramas brillantes, ya que tapan la información de tu cédula.</li>
                                    </ul>
                                    <p>Ten en cuenta que tienes 5 intentos, después de estos intentos si continúas sin poder activar el servicio comunícate con nosotros a sac@puntopay.co</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-13" />
                                <label htmlFor="list-item-13">¿Cuándo recibo el dinero de mis ventas por el Link de Pago?</label>
                                <div className="acordeon-content">
                                    <p>Tu dinero se verá reflejado en el historial de la pestaña Ventas de hoy de forma inmediata si realizas la venta con link de pago; y podrás utilizarlos dentro de la app inmediatamente. </p>
                                    <p>Si realizas la venta con datafono, verás reflejado el valor en saldo disponible  en 1 días hábil (24 horas), si tu dinero no ha sido compensado en este tiempo comunícate con nosotros a sac@puntopay.co</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-14" />
                                <label htmlFor="list-item-14">¿Cuáles son las tarifas del Link de Pago?</label>
                                <div className="acordeon-content">
                                    <p>No contamos con cuotas mensuales ni transacciones mínimas. Pagarás sólo por cada transacción exitosa.</p>
                                    <ul>
                                        <li>3% + $300 pesos + IVA</li>
                                    </ul>
                                    <p>Recuerda que, si transfieres tu dinero a cuentas Davivienda, Daviplata o Nequi el valor es $0 pero si transfieres a otras cuentas debes pagar.</p>
                                    <ul>
                                        <li>$2.950 pesos + 0.5% del valor del dinero movilizado + IVA</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-15" />
                                <label htmlFor="list-item-15">¿Cómo realizo una recarga?</label>
                                <div className="acordeon-content">
                                    <p>Recuerda que debes tener saldo en tu cuenta Puntopay para realizar el pago. Si no sabes cómo hacerlo, ingresa a nuestra respuesta ¿Cómo cargar saldo a tu cuenta Punto pay? Para realizar una recarga a través de Puntopay abre la App:</p>
                                    <ul>
                                        <li>Ingresa a la sección de Compra y selecciona Recargas</li>
                                        <li>Selecciona el operador móvil Inicia la recarga</li>
                                        <li>Selecciona el valor a cargar o ingresa otro valor Ingresa el número celular</li>
                                        <li>Finaliza la recarga</li>
                                        <li>Recibirás una notificación por SMS.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-16" />
                                <label htmlFor="list-item-16">¿Cómo compro un paquete?</label>
                                <div className="acordeon-content">
                                    <p>Recuerda que debes tener saldo en tu cuenta Puntopay para realizar el pago. Si no sabes cómo hacerlo, ingresa a nuestra respuesta ¿Cómo cargar saldo a tu cuenta Punto pay? Para realizar una recarga a través de Puntopay abre la App:</p>
                                    <ul>
                                        <li>Ingresa a la sección de Compra y selecciona paquetes</li>
                                        <li>Selecciona el operador móvil</li>
                                        <li>Ver paquetes</li>
                                        <li>Selecciona el paquete de interés, (Datos móviles, Voz, o Todo incluido)</li>
                                        <li>Ingresa el número celular y finaliza la compra</li>
                                        <li>Recibirás una notificación por SMS.</li>        
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-17" />
                                <label htmlFor="list-item-17">No llego mi recarga o paquete</label>
                                <div className="acordeon-content">
                                    <p>Primero verifica en tus movimientos si aparece exitosa la transacción (valores en verde), luego verifica si recibiste una notificación por SMS de la recarga. Si la transacción no fue exitosa intenta de nuevo, puede deberse a un problema de conexión o internet. Si la transacción continua sin acreditarse o no llega tu recarga comunícate con nosotros a sac@puntopay.co</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-18" />
                                <label htmlFor="list-item-18">¿Cómo sé cuáles son los costos y comisiones de mis productos virtuales?</label>
                                <div className="acordeon-content">
                                    <p>Realizar Recargas o Comprar Paquetes en Puntopay no tiene costo adicional, paga sólo el valor que desees recargar. Por otro lado, este servicio no genera comisión o ganancias para vendedores o comerciantes. Este servicio es un valor agregado de la App de Medios de Pago.</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-19" />
                                <label htmlFor="list-item-19">¿Cómo pagar una factura?</label>
                                <div className="acordeon-content">
                                    <p>Recuerda que debes tener saldo en tu cuenta Puntopay para realizar el pago. Si no sabes cómo hacerlo, ingresa a nuestra respuesta ¿Cómo cargar saldo a tu cuenta Puntopay? Para realizar el pago de una factura a través de Puntopay abre la App:</p>
                                    <ul>
                                        <li>Ingresa a la sección de Paga y selecciona Pagar facturas</li>
                                        <li>Busca el proveedor o convenio a pagar y selecciónalo</li>
                                        <li>Ingresa el número de Referencia de Pago y consulta el servicio Realiza el pago del monto de tu factura</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-20" />
                                <label htmlFor="list-item-20">¿Puedo pagar facturas vencidas?</label>
                                <div className="acordeon-content">
                                    <p>Si, puedes hacerlo en Puntopay</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-21" />
                                <label htmlFor="list-item-21">No se acredita mi pago</label>
                                <div className="acordeon-content">
                                    <p>Primero verifica en tus movimientos si aparece exitosa la transacción (valores en verde), luego verifica si recibiste una notificación por SMS del pago. Si la transacción no fue exitosa, intenta de nuevo, puede deberse a un problema de conexión o internet. Si la transacción continúa sin acreditarse o el pago no llegó a tu proveedor de servicios públicos en 48 horas comunícate con nosotros a sac@puntopay.co </p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-22" />
                                <label htmlFor="list-item-22">¿Cómo adquiero y uso el datafono?</label>
                                <div className="acordeon-content">
                                    <ul>
                                        <li>El datáfono se adquiere a través de la App, en la sección Compra, y luego seleccionando la opción Compra datafono.</li>
                                        <li>Ingresa tus datos de envío, método de pago y realiza el pago. Tu datafono llegará entre 3 y 8 días hábiles.</li>
                                        <li>Para operar el datáfono tendrás que descargar la aplicación “Datafono Puntopay” en Google Play.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-23" />
                                <label htmlFor="list-item-23">¿Cuáles son los costos y comisiones del datáfono?</label>
                                <div className="acordeon-content">
                                    <p>El datáfono tiene un costo de $89.000 pesos. No contamos con cuotas mensuales ni transacciones mínimas. Pagarás sólo por cada transacción exitosa.</p>
                                    <ul>
                                        <li>3% + impuestos de ley</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-24" />
                                <label htmlFor="list-item-24">¿Cuándo recibo el dinero de mis ventas por el Datáfono?</label>
                                <div className="acordeon-content">
                                    <p>Tu dinero se verá reflejado en el historial de la pestaña Ventas de hoy de forma inmediata; pero podrás tenerlo disponible en 1 días hábil (24 horas) en la pestaña Saldo total disponible, Si tu dinero no ha sido compensado en este tiempo comunícate con nosotros a sac@puntopay.co</p>
                                </div>
                            </li>
                            <li>
                                <input type="checkbox" id="list-item-25" />
                                <label htmlFor="list-item-25">Tengo problemas con el dispositivo</label>
                                <div className="acordeon-content">
                                    <p>Si tu dispositivo no funciona, comunicate via whatsapp con Servicio al cliente</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PreguntasFrecuentes