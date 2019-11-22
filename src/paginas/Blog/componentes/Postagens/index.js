import React from 'react'
import './style.css'


function Postagens (props){
    return (
        <section className='blog-postagens'> 
        <div className='postagem'
        >
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
        <button className='botao'>Saiba Mais </button>

        </div>
    </section>

    )
}

export default Postagens