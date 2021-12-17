package com.br.backend.dto;

import com.br.backend.model.Fornecedor;
import com.br.backend.model.Produto;
import com.br.backend.model.TipoProduto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDTO {

    private Long id;
    private String nome;
    private Fornecedor fornecedor;
    private TipoProduto tipoProduto;
    private Integer estoque;
    private Double precoVenda;
    private Double precoCompra;

    public static ProdutoDTO from(Produto produto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        return modelMapper.map(produto, ProdutoDTO.class);
    }
}
