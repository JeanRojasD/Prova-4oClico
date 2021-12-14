package com.br.backend.repository;

import com.br.backend.model.TipoProduto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TipoProdutoRepository extends JpaRepository<TipoProduto, Long> {
    Optional<TipoProduto> findByNomeContaining(String nome);
}
