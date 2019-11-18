import React from 'react';
import './style.css';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.sate = {
            aberto: false
        }
    }

//ESTA FUNCIÓN ES LA QUE AGARRA EL CLICK
    handleAbreOuFecha = e => {
        this.setState(prevState => {
            return {aberto: !prevState.aberto}
        })
    }
    render() {
        let classesDasOpcoes = 'navbar-menu__opcoes'
        let classesDoBotao = 'navbar-menu__botao'
        //classes fueron declaradas como variables//

        if(this.sate.aberto){
            classesDasOpcoes += 'navbar-menu__opcones--aberto'
            classesDoBotao += 'navbar_menu__botao--aberto'
        }
        //variables se convirtieron en una function con IF//

        return (
        <div className='nav-menu navbar-links'>
            <span className={classesDoBotao} onClick={this.handleAbreOuFecha}>
                Menu
            </span>
            <ul className={classesDasOpcoes}>
                <li>Home</li>
                <li>Contato</li>
                <li>Mensagens</li>
            </ul>
        </div>
        )
    }
}

export default Menu;

