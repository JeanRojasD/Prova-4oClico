import React, { useState, useEffect } from 'react';
import Menu from "../../components/Menu/Menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectSearch from '../../components/SearchText/SearchText'
import { Form } from '../../assets/index'
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom'


import api from '../../api/produto'



const Editar = () => {

    const data = {
        id: '',
        nome: '',
        fornecedor: {
            id: '',
            nome: '',
            cnpj: ''
        },
        tipoProduto: {
            id: '',
            nome: ''
        },
        estoque: '',
        precoCompra: '',
        precoVenda: ''

    }
    const [object, setObject] = useState(data)
    const params = useParams();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setObject(({ ...object, [name]: value, }))
    }

    const getObject = async () => {

        const response = await api.get(`/${params.produtoId}`)

        console.log(params)
        console.log(response)
        setObject(response.data)
        return response.data
    }

    useEffect(() => {
        getObject()
    }, [])

    const registerSubmit = async () => {
        await api.put(`/${params.produtoId}`, object);
        navigate("/");
    }

    return (
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Editar Produto Existente</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={object.nome || ''} />
                <TextField className="text" id="outlined-basic" required label="Estoque" variant="outlined" onChange={handleChange} type="text" name="estoque" value={object.estoque || ''} />
                <SelectSearch
                    label='Fornecedor'
                    from='/fornecedor'
                    inputValue={object.fornecedor.nome}
                    labelProperty='nome'
                    onChange={(_e, newVal) => { 
                        setObject({ ...object, fornecedor: { ...object.fornecedor, nome: newVal.nome } }) 
                    }}
                    getOptionLabel={option => option.type}
                />
                 <SelectSearch
                    label='Tipo de Produto'
                    from='/tipoProduto'
                    inputValue={object.tipoProduto.nome}
                    labelProperty='nome'
                    onChange={(_e, newVal) => setObject({ ...object, tipoProduto: newVal })}
                    getOptionLabel={option => option.type}
                />
                <TextField className="text" id="outlined-basic" required label="Preço de Venda" variant="outlined" onChange={handleChange} type="text" name="precoVenda" value={object.precoVenda || ''} />
                <TextField className="text" id="outlined-basic" required label="Preço de Compra" variant="outlined" onChange={handleChange} type="text" name="precoCompra" value={object.precoCompra || ''} />
                <Button className="button" variant="contained" type="submit" color="secondary"> Salvar </Button>
            </Form>
        </div>
    );
}

export default Editar;