import React from 'react';

function CaixaTexto (props) {
    console.log(props)

    function validaCampo(evento) {
        if (props.required && evento.target.value.trim()=== ''){
            props.mudaEstado(evento.target.name, evento.target.value, 'Campo Obrigatório')
            return
        }
        props.mudaEstado(evento.target.name, evento.target.value)
    }
    return (
        <input
        name={props.name}
        type='text'
        className='campo'
        placeholder={props.placeholder}
        onChange={validaCampo}
        />
    )
}




export default CaixaTexto;