import React from 'react'
import Grupo from './Grupo'
import Botao from './componentes/Botao'


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

    estaDesabilitado = () => {
        return (
            !this.state.nome.valor ||
            this.state.nome.erro ||
            !this.state.email.valor ||
            this.state.email.erro ||
            !this.state.pais.valor ||
            this.state.pais.erro ||
            !this.state.mensagem.valor ||
            this.state.mensagem.erro 

        )
    }

    render() {
        const verificaBotao = this.estaDesabilitado()
        //true ou false
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
                        minlenght={10}
                        required 
                        type='text'
                        />
                        </Grupo>
                        <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor='nome'> Email: </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                        name='email'
                        placeholder='Digite seu email'
                        mudaEstado={this.handleChange}
                        required 
                        type='email'
                        />
                        </Grupo>
                        <Grupo erro={this.state.pais.erro}>
                        <Grupo.Legenda htmlFor='nome'> Pais: </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                        name='pais'
                        placeholder='Digite seu pais'
                        mudaEstado={this.handleChange}
                        required 
                        type='text'
                        />
                        </Grupo>
                        <Grupo erro={this.state.mensagem.erro}>
                        <Grupo.Legenda htmlFor='nome'> Mensagem: </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                        name='mensagem'
                        placeholder='Digite a sua mensagem'
                        mudaEstado={this.handleChange}
                        type='text'
                        />
                        </Grupo>
                        <Botao
                        desabilitado={verificaBotao}
                        mudaConteudo={this.props.mudaConteudo}
                        pagina='sucesso'
                        >
                        Enviar
                        </Botao>
                    
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
                    