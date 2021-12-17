import React, { useState, useEffect } from 'react';
import Menu from "../../components/Menu/Menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form } from '../../assets/index'
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom'


import api from '../../api/tipoProduto'



const EditarTypeProduct = () => {


    const [object, setObject] = useState({})
    const params = useParams();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setObject(({ ...object, [name]: value, }))
    }

    const getObject = async () => {

        const response = await api.get(`/${params.tipoProdutoId}`)

        console.log(params)
        console.log(response)
        setObject(response.data)
        return response.data
    }

    useEffect(() => {
        getObject()
    }, [])

    const registerSubmit = async () => {
        await api.put(`/${params.tipoProdutoId}`, object);
        navigate("/");
    }

    return (
        <div>
            <Menu />
            <Form onSubmit={registerSubmit}>
                <h2>Editar Tipo de Produto Existente</h2>
                <TextField className="text" id="outlined-basic" required label="Nome" variant="outlined" onChange={handleChange} type="text" name="nome" value={object.nome || ''} />
                <Button className="button" variant="contained" type="submit" color="secondary"> Salvar </Button>
            </Form>
        </div>
    );
}

export default EditarTypeProduct;