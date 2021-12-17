package com.br.backend.service;

import com.br.backend.configuration.ModelMapperConfig;
import com.br.backend.dto.ProdutoDTO;
import com.br.backend.dto.form.ProdutoForm;
import com.br.backend.model.Produto;
import com.br.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    @Autowired
    private ModelMapperConfig modelMapper;

    public ProdutoService(ProdutoRepository repository, ModelMapperConfig modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<ProdutoDTO> findAll() {
        List<Produto> produtos = repository.findAll();
        return produtos.stream().map(ProdutoDTO::from).collect(Collectors.toList());
    }

    public ProdutoDTO create(ProdutoForm produtoForm) {
        if(repository.findByNomeContaining(produtoForm.getNome()).isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto já existente");
        }
        return ProdutoDTO.from(repository.save(Produto.from(produtoForm)));
    }

    public ProdutoDTO update(Long id, ProdutoForm produtoForm){
        Produto produtoFound = repository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        });

        modelMapper.modelMapper().map(produtoForm, produtoFound);

        return ProdutoDTO.from(repository.save(produtoFound));
    }

    public void delete(Long id){
        Produto produto = repository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        });

        repository.delete(produto);
    }

    public ProdutoDTO findById(Long id) {
        return ProdutoDTO.from(repository.findById(id).orElseThrow(() ->{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }));
    }
}
