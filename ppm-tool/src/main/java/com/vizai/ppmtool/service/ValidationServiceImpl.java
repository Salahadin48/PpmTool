package com.vizai.ppmtool.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ValidationServiceImpl {
    public ResponseEntity<?> validate(BindingResult result) {

        List<FieldError> errors = result.getFieldErrors();
        Map<String, String> errorMap = errors.stream().collect(Collectors.toMap(e -> e.getField(), e -> e.getDefaultMessage()));
        if (result.hasErrors()) return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        return null;
    }

}
