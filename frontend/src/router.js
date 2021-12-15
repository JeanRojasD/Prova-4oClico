import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produtos from "./pages/Produtos/Produtos"


const RouterLinks = () =>{
    return(
        <Router>
            <Routes>
                {/* <Route path='/' element={<Index />} /> */}
                <Route path='/' element={<Produtos />} />
            </Routes>
        </Router>
    )
}

export default RouterLinks