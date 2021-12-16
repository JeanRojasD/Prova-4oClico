import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produtos from "./pages/Produtos/Produtos"
import Cadastro from "./pages/Cadastro/Cadastro"

const RouterLinks = () =>{
    return(
        <Router>
            <Routes>
                {/* <Route path='/' element={<Index />} /> */}
                <Route path='/' element={<Produtos />} />
                <Route path='/cadastroProduto' element={<Cadastro />} />
            </Routes>
        </Router>
    )
}

export default RouterLinks