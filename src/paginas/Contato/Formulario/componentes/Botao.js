import React from 'react'

function Botao (props) {
    let classes = 'botao'
    if(props.desabilitado){
        classes+= 'botao--desabilitado'
    }
    const handleClick =(evento)=> {
        console.log(evento)
    }
    return (
        <button onClick={handleClick} className='classes'> Enviar </button>
    )
}

export default Botao;