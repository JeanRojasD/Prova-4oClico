package com.br.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDTO {

    private Long id;
    private String nome;
    private FornecedorDTO fornecedor;
    private TipoProdutoDTO tipoProduto;
    private Double precoVenda;
    private Double precoCompra;

}
