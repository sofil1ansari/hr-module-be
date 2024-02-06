package com.coderower.hrmodule.database.entities;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class JsonRequest {
    private Object data;

    public Project getProjectData() {
        return (Project) data;
    }

    public void setData(Project data) {
        this.data = data;
    }
}
