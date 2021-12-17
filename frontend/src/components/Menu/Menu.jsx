import React from "react";
import logo from '../../assets/logo.svg'
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    box-shadow: 0px 5px 5px grey;
    .options{
        display:flex;
        list-style-type: none;

        li{
            margin-left: 10px;
            font-weight: bold;
            color: #9c27b0;
        }

        a{
            text-decoration: none;
        }
    }
`
const Image = styled.img`
    width: 100px;
`

const Header = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    color: #9c27b0;
    .img{
        margin-right: 10px;
    }
`

const Menu = () => {
    return (
        <Container>
            <Header>
                <Image src={logo} alt="logo" className="img"/>
                <h3>Jean's Programs</h3>
            </Header>
                <nav>
                    <ul className='options'>
                        <Link to="/"><li>Produto</li></Link>
                        <Link to="/fornecedor"><li>Fornecedor</li></Link>
                        <Link to="/tipoProduto"><li>Tipo de Produto</li></Link>
                    </ul>
                </nav>
        </Container>
    );
}

export default Menu;