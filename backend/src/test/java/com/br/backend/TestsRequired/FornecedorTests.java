package com.br.backend.TestsRequired;

import com.br.backend.dto.form.FornecedorForm;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class FornecedorTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    public void creating() throws Exception{
        FornecedorForm fornecedorForm = FornecedorForm.builder()
                .nome("Provider Example")
                .cnpj("80.069.063/0001-33")
                .build();

        mockMvc.perform(post("/fornecedor").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(fornecedorForm)));
    }

    @Test
    public void verify_WhenRequestPost() throws Exception{
        FornecedorForm fornecedorForm = FornecedorForm.builder()
                .nome("Provider Two")
                .cnpj("82.213.462/0001-51")
                .build();

        mockMvc.perform(post("/fornecedor").contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(fornecedorForm)))
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    public void verify_WhenTheCnpjHasExists() throws Exception{
        FornecedorForm fornecedorForm = FornecedorForm.builder()
                .nome("Provider Three")
                .cnpj("80.069.063/0001-33")
                .build();

        mockMvc.perform(post("/fornecedor").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(fornecedorForm)))
                .andExpect(status().isBadRequest())
                .andReturn();
    }

}
