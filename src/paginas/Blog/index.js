import React from 'react'
import Header from '../../componentes/Header'
import Postagens from './componentes/Postagens'

import './style.css'

function Blog () {
    return (
        <main>
            <Header 
            class='blog-header' 
            titulo="Blog"
            />
            <Postagens />
        </main> 
    )
}

export default Blog