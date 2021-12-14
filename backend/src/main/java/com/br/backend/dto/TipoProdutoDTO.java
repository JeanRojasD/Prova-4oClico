package com.br.backend.dto;

import com.br.backend.configuration.ModelMapperConfig;
import com.br.backend.model.TipoProduto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TipoProdutoDTO {

    private Long id;
    private String nome;

    public static TipoProdutoDTO from(TipoProduto tipoProduto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        return modelMapper.map(tipoProduto, TipoProdutoDTO.class);
    }
}
