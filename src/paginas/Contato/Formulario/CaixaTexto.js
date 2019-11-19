import React from 'react';

function CaixaTexto (props) {
    console.log(props)
    // const {required,mudaEstado, name, placeholder} = props

    function validaCampo(evento) {
        const { value, name} = evento.target
        // const value = evento.target.value
        // const name = evento.target.name

        if(props.required && evento.target.value.trim()=== ''){
            props.mudaEstado(evento.target.name, evento.target.value, 'Campo Obrigatório')
            return
        }
        if(props.minLength && value.length <props.minLength){
            props.mudaEstado(name, value, `Digite pelo menos ${props.minLength}caracteres`)
            return
        }
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(props.type === 'email' && !regex.test({value})){
            props.mudaEstad(name, value, 'Digite um email válido')
        }
        props.mudaEstado(name, value)
    }
    return (
        <input
        name={props.name}
        type={props.type}
        className='campo'
        placeholder={props.placeholder}
        onChange={validaCampo}
        />
    )
}




export default CaixaTexto;