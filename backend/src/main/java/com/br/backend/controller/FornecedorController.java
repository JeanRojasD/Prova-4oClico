package com.br.backend.controller;

import com.br.backend.dto.FornecedorDTO;
import com.br.backend.dto.form.FornecedorForm;
import com.br.backend.service.FornecedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

    @Autowired
    private FornecedorService fornecedorService;

    public FornecedorController(FornecedorService fornecedorService) {
        this.fornecedorService = fornecedorService;
    }

    @GetMapping
    public ResponseEntity<List<FornecedorDTO>> findAll(){
        return ResponseEntity.ok(fornecedorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FornecedorDTO> findById(@PathVariable Long id){
        return ResponseEntity.ok(fornecedorService.findById(id));
    }

    @PostMapping
    public ResponseEntity<FornecedorDTO> create(@RequestBody @Valid FornecedorForm fornecedorForm){
        return ResponseEntity.ok(fornecedorService.create(fornecedorForm));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FornecedorDTO> update(@PathVariable Long id, @RequestBody @Valid FornecedorForm fornecedorForm){
        return ResponseEntity.ok(fornecedorService.update(id, fornecedorForm));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        fornecedorService.delete(id);
        return ResponseEntity.ok().build();
    }
    
}
