import React, { useState } from 'react';
import Menu from "../../components/Menu/Menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectSearch from '../../components/SearchText/SearchText'
import { Form } from '../../assets/index'
import { useNavigate } from 'react-router';

import api from '../../api/produto'

const Cadastro = () => {
    const data = {
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
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setObject(({ ...object, [name]: value, }))
    }

    const registerSubmit = async () => {
        await api.post("/", object)
        navigate(-1)
    }


    return (
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Cadastro de novo Produto</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={object.nome || ''} />
                <TextField className="text" id="outlined-basic" required label="Estoque" variant="outlined" onChange={handleChange} type="text" name="estoque" value={object.estoque || ''} />
                <SelectSearch
                    label='Fornecedor'
                    from='/fornecedor'
                    inputValue={object.fornecedor.nome}
                    onChange={(_e, newVal) => setObject({ ...object, fornecedor: newVal })}
                    getOptionLabel={option => option.type}
                />
                <TextField className="text" id="outlined-basic" required label="Preço de Venda" variant="outlined" onChange={handleChange} type="text" name="precoVenda" value={object.precoVenda || ''} />
                <TextField className="text" id="outlined-basic" required label="Preço de Compra" variant="outlined" onChange={handleChange} type="text" name="precoCompra" value={object.precoCompra || ''} />
                <Button className="button" variant="contained" type="submit" color="secondary"> Cadastrar </Button>
            </Form>
        </div>
    );
}

export default Cadastro;