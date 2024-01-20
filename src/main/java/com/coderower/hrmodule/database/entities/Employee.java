package com.coderower.hrmodule.database.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection ="employee")
public class Employee {

  public String title;
  public String firstName;
  public String lastName;
  public String email;
  public String phoneNumber;

}