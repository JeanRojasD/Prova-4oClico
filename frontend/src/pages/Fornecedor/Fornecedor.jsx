import React from 'react';
import Menu from '../../components/Menu/Menu'
import TableComponentProvider from '../../components/TableComponent/TableComponentProvider'

const Fornecedor = () => {
    return(
        <div>
            <Menu />
            <TableComponentProvider />
        </div>
    );
}

export default Fornecedor;