package com.coderower.hrmodule.database.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Document(collection ="timeLog")
public class TimeLog {

  public String email;
  public String workItem;

}