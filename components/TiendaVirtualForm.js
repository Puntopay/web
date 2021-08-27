
import { Component } from 'react'

class FormTienda extends Component{

    componentDidMount(){
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        document.body.appendChild(script)

        script.addEventListener( 'load', () => {
            if( window.hbspt ) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "6058980",
                    formId: "022d677a-c233-46b1-bcca-19c291e486bf",
                    target: '#tienda-form'
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div id="tienda-form"></div>
            </div>
        );
    }

}

export default FormTienda