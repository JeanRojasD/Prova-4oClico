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


import api from '../../api/fornecedor'


const TextInput = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;

    .text{
        width: 100%;
    }
`

const TableComponentProvider = () => {

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
        <Link to={{ pathname: `/cadastrofornecedor` }}><Button variant="contained" color="secondary">Cadastrar</Button></Link>
      </TextInput>
      <TableContainer className="listmap-container">
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow className="color">
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Cnpj</TableCell>
              <TableCell align="center">Editar</TableCell>
              <TableCell align="center">Deletar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.filter((fornecedor) => {
              if (search === "") {
                return fornecedor
              } else if (fornecedor.nome.toLowerCase().includes(search.toLowerCase())) {
                return fornecedor
              }
            }).map((fornecedor, key) => {
              return (
                <TableRow key={fornecedor.id}>
                  <TableCell align="left" inputProps={{ 'data-testid': 'id' }}>{fornecedor.id}</TableCell>
                  <TableCell align="left">{fornecedor.nome}</TableCell>
                  <TableCell align="left">{fornecedor.cnpj}</TableCell>
                  <TableCell align="center">
                    <Link to={{ pathname: `/editarfornecedor/${fornecedor.id}` }}><Button variant="contained" color="secondary">Editar</Button></Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="error" onClick={() => onDelete(fornecedor.id)}> Delete </Button>
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

export default TableComponentProvider;