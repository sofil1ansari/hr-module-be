package com.coderower.hrmodule.database.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Document(collection ="employee")
public class Employee {

  @Id
  public String id;
  public String title;
  public String firstName;
  public String lastName;
  public String email;
  public String phoneNumber;

}