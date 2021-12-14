package com.br.backend.service;

import com.br.backend.configuration.ModelMapperConfig;
import com.br.backend.dto.TipoProdutoDTO;
import com.br.backend.dto.form.TipoProdutoForm;
import com.br.backend.model.TipoProduto;
import com.br.backend.repository.TipoProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TipoProdutoService {
    
    @Autowired
    private TipoProdutoRepository repository;

    @Autowired
    private ModelMapperConfig modelMapper;

    public TipoProdutoService(TipoProdutoRepository repository, ModelMapperConfig modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<TipoProdutoDTO> findAll() {
        List<TipoProduto> tipoProdutos = repository.findAll();
        return tipoProdutos.stream().map(TipoProdutoDTO::from).collect(Collectors.toList());
    }

    public TipoProdutoDTO create(TipoProdutoForm tipoProdutoForm) {
        if(repository.findByNomeContaining(tipoProdutoForm.getNome()).isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Tipo já existente");
        }
        return TipoProdutoDTO.from(repository.save(TipoProduto.from(tipoProdutoForm)));
    }

    public TipoProdutoDTO update(Long id, TipoProdutoForm tipoProdutoForm){
        TipoProduto tipoProdutoFound = repository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        });

        modelMapper.modelMapper().map(tipoProdutoForm, tipoProdutoFound);

        return TipoProdutoDTO.from(repository.save(tipoProdutoFound));
    }

    public void delete(Long id){
        TipoProduto tipoProduto = repository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        });

        repository.delete(tipoProduto);
    }

}
