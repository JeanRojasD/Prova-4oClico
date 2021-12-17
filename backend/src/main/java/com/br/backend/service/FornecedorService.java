package com.br.backend.service;

import com.br.backend.configuration.ModelMapperConfig;
import com.br.backend.dto.FornecedorDTO;
import com.br.backend.dto.form.FornecedorForm;
import com.br.backend.model.Fornecedor;
import com.br.backend.repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FornecedorService {

    @Autowired
    private FornecedorRepository repository;

    @Autowired
    private ModelMapperConfig modelMapper;

    public FornecedorService(FornecedorRepository repository, ModelMapperConfig modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<FornecedorDTO> findAll() {
        List<Fornecedor> fornecedores = repository.findAll();
        return fornecedores.stream().map(FornecedorDTO::from).collect(Collectors.toList());
    }

    public FornecedorDTO create(FornecedorForm fornecedorForm) {
        if(repository.findByNomeContaining(fornecedorForm.getNome()).isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Fornecedor já existente");
        }
        if(repository.findByCnpjContaining(fornecedorForm.getCnpj()).isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CNPJ já cadastrado");
        }
        return FornecedorDTO.from(repository.save(Fornecedor.from(fornecedorForm)));
    }

    public FornecedorDTO update(Long id, FornecedorForm fornecedorForm){
        Fornecedor fornecedorFound = repository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        });

        modelMapper.modelMapper().map(fornecedorForm, fornecedorFound);

        return FornecedorDTO.from(repository.save(fornecedorFound));
    }

    public void delete(Long id){
        Fornecedor fornecedor = repository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        });

        repository.delete(fornecedor);
    }

    public FornecedorDTO findById(Long id) {
        return FornecedorDTO.from(repository.findById(id).orElseThrow(() ->{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }));
    }
}
