import React from 'react'
import { Header, Footer } from './layouts/index'
import Exercicies from './Exercicies/Exercicies'

const App = (props) => {

    return (
        <>
            <Header />
            <Exercicies />
            <Footer />
        </>
    )
}

export default App