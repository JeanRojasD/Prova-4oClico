import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produtos from "./pages/Produtos/Produtos"
import Fornecedor from "./pages/Fornecedor/Fornecedor"
import Cadastro from "./pages/Cadastro/Cadastro"
import Editar from "./pages/Editar/Editar"
import EditarProvider from "./pages/Editar/EditarProvider"
import CadastroProvider from "./pages/Cadastro/CadastroProvider"


const RouterLinks = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Produtos />} />
                <Route path='/fornecedor' element={<Fornecedor />} />
                <Route path='/cadastroProduto' element={<Cadastro />} />
                <Route path='/cadastroFornecedor' element={<CadastroProvider />} />
                <Route path='/editarFornecedor' element={<EditarProvider />}>
                    <Route path=':fornecedorId' element={<Editar />} />
                </Route>
                <Route path='/editarProduto' element={<Editar />}>
                    <Route path=':produtoId' element={<Editar />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouterLinks