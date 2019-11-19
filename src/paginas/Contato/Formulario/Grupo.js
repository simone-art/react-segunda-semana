import React from 'react'
import Legenda from './Legendas'
import CaixaTexto from './CaixaTexto'

function Grupo (props){
    return (
        <div>
            {props.children}
            {props.erro && <p className='grupo__erro'>{props.erro}</p>}
        </div>
    )
}

Grupo.Legenda = Legenda
Grupo.CaixaTexto = CaixaTexto

export default Grupo