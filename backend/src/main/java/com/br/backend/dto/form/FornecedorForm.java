package com.br.backend.dto.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FornecedorForm {

    @NotNull
    @NotEmpty
    @NotBlank
    private String nome;
    @NotNull
    @NotEmpty
    @NotBlank
    private String cnpj;

}
