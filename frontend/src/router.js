import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produtos from "./pages/Produtos/Produtos"
import Fornecedor from "./pages/Fornecedor/Fornecedor"
import TypeProduct from "./pages/TypeProduct/TypeProduct"
import Cadastro from "./pages/Cadastro/Cadastro"
import Editar from "./pages/Editar/Editar"
import EditarProvider from "./pages/Editar/EditarProvider"
import CadastroProvider from "./pages/Cadastro/CadastroProvider"
import EditarTypeProduct from "./pages/Editar/EditarTypeProduct"
import CadastroTypeProduct from "./pages/Cadastro/CadastroTypeProduct"


const RouterLinks = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Produtos />} />
                <Route path='/fornecedor' element={<Fornecedor />} />
                <Route path='/tipoProduto' element={<TypeProduct />} />
                <Route path='/cadastroProduto' element={<Cadastro />} />
                <Route path='/cadastroFornecedor' element={<CadastroProvider />} />
                <Route path='/cadastroTipoProduto' element={<CadastroTypeProduct />} />
                <Route path='/editarTipoProduto' element={<EditarTypeProduct />}>
                    <Route path=':tipoProdutoId' element={<EditarTypeProduct />} />
                </Route>
                <Route path='/editarFornecedor' element={<EditarProvider />}>
                    <Route path=':fornecedorId' element={<EditarProvider />} />
                </Route>
                <Route path='/editarProduto' element={<Editar />}>
                    <Route path=':produtoId' element={<Editar />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouterLinks