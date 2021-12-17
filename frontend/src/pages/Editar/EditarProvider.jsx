import React, { useState, useEffect } from 'react';
import Menu from "../../components/Menu/Menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form } from '../../assets/index'
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom'


import api from '../../api/fornecedor'



const Editar = () => {


    const [object, setObject] = useState({})
    const params = useParams();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setObject(({ ...object, [name]: value, }))
    }

    const getObject = async () => {

        const response = await api.get(`/${params.fornecedorId}`)

        console.log(params)
        console.log(response)
        setObject(response.data)
        return response.data
    }

    useEffect(() => {
        getObject()
    }, [])

    const registerSubmit = async () => {
        await api.put(`/${params.fornecedorId}`, object);
        navigate("/");
    }

    return (
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Editar Fornecedor Existente</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={object.nome || ''} />
                <TextField className="text" id="outlined-basic" required label="Cnpj" variant="outlined" onChange={handleChange} type="text" name="cnpj" value={object.cnpj || ''} />
                <Button className="button" variant="contained" type="submit" color="secondary"> Salvar </Button>
            </Form>
        </div>
    );
}

export default Editar;