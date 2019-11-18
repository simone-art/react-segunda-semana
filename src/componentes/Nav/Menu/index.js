import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';


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
                <li>
                <Link to='/' className='navbar-links__ativo'>
                Home
                </Link>
                </li>
                <li>
                <Link to='/contato' className='navbar-links__ativo'>
                Contato
                </Link>    
                </li>
                <li>
                <Link to='/chat' className='navbar-links__ativo'>
                Mensagens
                </Link>
               </li>
            </ul>
        </div>
        )
    }
}

export default Menu;

