import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Cadastro from '../pages/Cadastro/Cadastro'





const MockCadastro = () => {
    return (
        <BrowserRouter>
        <Cadastro/>
        </BrowserRouter>
    )

    }

test('teste de cadastro', async () => {

    render(<MockCadastro/>)
    const nameElement = await screen.findByTestId(/nome/i)
    expect(nameElement).toBeInTheDocument()

})
