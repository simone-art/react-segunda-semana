import React from 'react'
import Formulario from './Formulario'
// import CaixaTexto from './Formulario/CaixaTexto'
import './style.css'
// import Grupo from './Formulario/Grupo'
// import Botao from './Sucesso/'
import Sucesso from './Sucesso'

class Contato extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conteudo: 'formulario'

        }
    }

    handleMudaConteudo = (proximaPagina) => {
        this.setState({
            conteudo: proximaPagina
        })
    }

    render() {
        return (
            <section className='PageContato'>
                {
                this.state.conteudo === 'formulario' && 
                <Formulario 
                mudaConteudo={this.handleMudaConteudo}
                />
                }
                {
                    this.state.conteudo === 'sucesso' && 
                    <Sucesso
                    mudaConteudo={this.handleMudaConteudo}
                    />  
                }
                {/* <h2>Essa e a página de contato</h2> */}
                {/* <CaixaTexto /> */}

            </section>
        )
    }
}


export default Contato;