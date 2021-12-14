package com.br.backend.dto.form;

import com.br.backend.dto.FornecedorDTO;
import com.br.backend.dto.TipoProdutoDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProdutoForm {

    private String nome;
    private FornecedorDTO fornecedor;
    private TipoProdutoDTO tipoProduto;
    private Double precoVenda;
    private Double precoCompra;

}
