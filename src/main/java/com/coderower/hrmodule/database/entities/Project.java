package com.coderower.hrmodule.database.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Document(collection ="project")
public class Project {

  @Id
  public String id;
  public String name;
  public String description;

}