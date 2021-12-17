import React, { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styled from 'styled-components'


import api from '../../api/tipoProduto'


const TextInput = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;

    .text{
        width: 100%;
    }
`

const TableComponentTypeProduct = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  const getData = async () => {

    const response = await api.get("/")

    console.log(response)
    setData(response.data)
    return response.data
  }

  useEffect(() => {
    getData()
  }, [])

  const onDelete = async (id) => {

    await api.delete(`/${id}`)

    window.location.reload();
  }

  return (
    <div className="listmap">
      <TextInput>
        <TextField className="text" id="outlined-basic" label="Pesquisar" type="text" variant="outlined" onChange={(event) => { setSearch(event.target.value) }} />
        <Link to={{ pathname: `/cadastroTipoProduto` }}><Button variant="contained" color="secondary">Cadastrar</Button></Link>
      </TextInput>
      <TableContainer className="listmap-container">
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow className="color">
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="center">Editar</TableCell>
              <TableCell align="center">Deletar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.filter((typeProduct) => {
              if (search === "") {
                return typeProduct
              } else if (typeProduct.nome.toLowerCase().includes(search.toLowerCase())) {
                return typeProduct
              }
            }).map((typeProduct, key) => {
              return (
                <TableRow key={typeProduct.id}>
                  <TableCell align="left" inputProps={{ 'data-testid': 'id' }}>{typeProduct.id}</TableCell>
                  <TableCell align="left">{typeProduct.nome}</TableCell>
                  <TableCell align="center">
                    <Link to={{ pathname: `/editarTipoProduto/${typeProduct.id}` }}><Button variant="contained" color="secondary">Editar</Button></Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="error" onClick={() => onDelete(typeProduct.id)}> Delete </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponentTypeProduct;