package com.coderower.hrmodule.models.employee;

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