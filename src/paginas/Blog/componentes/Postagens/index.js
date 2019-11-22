import React from 'react'


function Postagens (props){
    return (
        <section className='blog-postagens'> 
        <div className='postagens'
        >
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
        <button className='botao'>Saiba Mais </button>

        </div>
    </section>

    )
}

export default Postagens