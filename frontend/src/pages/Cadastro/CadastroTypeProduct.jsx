import React, { useState } from 'react';
import Menu from "../../components/Menu/Menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectSearch from '../../components/SearchText/SearchText'
import { Form } from '../../assets/index'
import { useNavigate } from 'react-router';

import api from '../../api/tipoProduto'

const CadastroTypeProduct = () => {

    const [object, setObject] = useState({})
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
                <h2>Cadastro de novo Tipo de Produto</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={object.nome || ''} />
                <Button className="button" variant="contained" type="submit" color="secondary"> Cadastrar </Button>
            </Form>
        </div>
    );
}

export default CadastroTypeProduct;