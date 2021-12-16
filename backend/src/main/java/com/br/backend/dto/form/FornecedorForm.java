package com.br.backend.dto.form;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
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
