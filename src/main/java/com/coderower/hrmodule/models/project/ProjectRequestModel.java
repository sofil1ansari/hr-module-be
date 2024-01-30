package com.coderower.hrmodule.models.project;

import java.util.Map;

public class ProjectRequestModel {

    private Map<String, Object> filter;

    public ProjectRequestModel(){}

    public Map<String, Object> getFilter() {
        return filter;
    }

    public void setFilter(Map<String, Object> filter) {
        this.filter = filter;
    }

	
}