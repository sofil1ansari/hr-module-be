package com.coderower.hrmodule.database.entities;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class JsonRequest {
    private Project data;

    public Project getData() {
        return data;
    }

    public void setData(Project data) {
        this.data = data;
    }
}
