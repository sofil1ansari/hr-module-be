package com.coderower.hrmodule.database.entities;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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