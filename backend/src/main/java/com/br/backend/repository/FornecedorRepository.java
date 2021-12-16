package com.br.backend.repository;

import com.br.backend.model.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {
    Optional<Fornecedor> findByNomeContaining(String nome);

    Optional<Fornecedor> findByCnpjContaining(String cnpj);
}
