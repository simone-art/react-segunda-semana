import React from 'react'
import Formulario from './Formulario'
import CaixaTexto from './Formulario/CaixaTexto'
import './style.css'

function Contato (){
    return (
        <section className='PageContato'>
            <h2>Essa e a página de contato</h2>
            <Formulario/>
        </section>
    )
}

export default Contato;