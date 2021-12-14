package com.br.backend.model;

import com.br.backend.dto.form.ProdutoForm;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "produto")
public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @ManyToOne
    private Fornecedor fornecedor;
    @ManyToOne
    private TipoProduto tipoProduto;
    private Double precoVenda;
    private Double precoCompra;

    public static Produto from(ProdutoForm produtoForm) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        return modelMapper.map(produtoForm, Produto.class);
    }
}
