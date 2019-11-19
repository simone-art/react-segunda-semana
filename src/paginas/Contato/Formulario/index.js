import React from 'react'
import Grupo from './Grupo'


class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            pais: {
                valor: '',
                erro: ''
            },
            mensagem: {
                valor: '',
                erro: ''
            },
        } 

        
    }
    handleChange = (nomeDoCampo, valorDocampo, erroDoCampo='') => {
        console.log('handleChange', nomeDoCampo, valorDocampo,erroDoCampo)
        this.setState({
            [nomeDoCampo]:{
                valor:valorDocampo,
                erro: erroDoCampo
            }
        })
}
    render() {
        return (
            // console.log(this.state)

            <div className='pagina'>
                <h2>Entre en contato conosco</h2>
                <form className='formulario'>
                    <Grupo erro={this.state.nome.erro}>
                        <Grupo.Legenda htmlFor='nome'> Nome Completo: </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                        name='nome'
                        placeholder='Digite seu nome'
                        mudaEstado={this.handleChange}
                        required 
                        />
                        </Grupo>
                        <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor='nome'> Email: </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                        name='email'
                        placeholder='Digite seu email'
                        mudaEstado={this.handleChange}
                        required 
                        />
                        </Grupo>
                        <Grupo erro={this.state.pais.erro}>
                        <Grupo.Legenda htmlFor='nome'> Pais: </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                        name='pais'
                        placeholder='Digite seu pais'
                        mudaEstado={this.handleChange}
                        required 
                        />
                        </Grupo>
                        <Grupo erro={this.state.mensagem.erro}>
                        <Grupo.Legenda htmlFor='nome'> Mensagem: </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                        name='mensagem'
                        placeholder='Digite a sua mensagem'
                        mudaEstado={this.handleChange}
                        />
                        </Grupo>
                </form>
            </div>
        )
    }
}

export default Formulario;

// <CaixaTexto
// name='nome'
// placeholder='Digite seu nome'
// mudaEstado={this.handleChange}
// />
// <CaixaTexto
// name='email'
// placeholder='Digite seu email'
// mudaEstado={this.handleChange}
// />

// <CaixaTexto
// name='pais'
// placeholder='Digite seu pais'
// mudaEstado={this.handleChange}
// />

// <CaixaTexto
// name='mensage,'
// placeholder='Digite a sua mensagem'
// mudaEstado={this.handleChange}
// />
                    