package com.coderower.hrmodule.models.product;

import java.util.Map;
import java.util.Optional;

import static java.util.Optional.ofNullable;

public class TimeLogRequestModel {

    private Map<String, Object> filter;

    public TimeLogRequestModel(){}

    public Map<String, Object> getFilter() {
        return filter;
    }

    public void setFilter(Map<String, Object> filter) {
        this.filter = filter;
    }
}