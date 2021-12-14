package com.br.backend.controller;

import com.br.backend.dto.TipoProdutoDTO;
import com.br.backend.dto.form.TipoProdutoForm;
import com.br.backend.service.TipoProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/tipoProduto")
public class TipoProdutoController {

    @Autowired
    private TipoProdutoService tipoProdutoService;

    public TipoProdutoController(TipoProdutoService tipoProdutoService) {
        this.tipoProdutoService = tipoProdutoService;
    }

    @GetMapping
    public ResponseEntity<List<TipoProdutoDTO>> findAll(){
        return ResponseEntity.ok(tipoProdutoService.findAll());
    }

    @PostMapping
    public ResponseEntity<TipoProdutoDTO> create(@RequestBody @Valid TipoProdutoForm tipoProdutoForm){
        return ResponseEntity.ok(tipoProdutoService.create(tipoProdutoForm));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoProdutoDTO> update(@PathVariable Long id, @RequestBody @Valid TipoProdutoForm tipoProdutoForm){
        return ResponseEntity.ok(tipoProdutoService.update(id, tipoProdutoForm));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        tipoProdutoService.delete(id);
        return ResponseEntity.ok().build();
    }
    
}
