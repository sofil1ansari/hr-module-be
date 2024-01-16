package com.coderower.hr-module.models.product;

import java.util.Map;
import java.util.Optional;

import static java.util.Optional.ofNullable;

public class EmployeeRequestModel {

    private Map<String, Object> filter;

    public EmployeeRequestModel(){}

    public Map<String, Object> getFilter() {
        return filter;
    }

    public void setFilter(Map<String, Object> filter) {
        this.filter = filter;
    }
}