import React from 'react';

class CaixaTexto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        nome: ''
        }
    }


handleChange = (evento) => {
    this.setState ({
        nome: evento.target.value
    })
}

render() { 
    return (
        <input
            className='campo'
            type='text'
            name='nome'
            placeholder='Digite seu nome'
            onChange={this.handleChange}
            value={this.state.nome}
        />
    )
}
}

export default CaixaTexto;