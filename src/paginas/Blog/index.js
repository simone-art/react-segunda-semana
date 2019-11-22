import React from 'react'
import Header from '../../componentes/Header'
import Postagens from './componentes/Postagens'
import { getMensagens } from '../../service/posts'

import './style.css'

class Blog extends React.Component {
    constructor (props){
        super(props)
        this.state={
            posts:[]
        }
    }

    componentDidMount() {
        getMensagens()
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(this.posts)
            }) 
            .catch(error => {
                console.error(error)
            })
    }
    
    render(){
    return (
        <main>
            <Header 
            class='blog-header' 
            titulo="Blog"
            />
             {this.state.posts.length > 0
                ? this.state.posts.map(post => {
                    return <Postagens post={post} key={post.id} />
                })
                : <span>Carregando mensagens :</span>
             }
        </main> 
    )
    }
    
    
}

export default Blog