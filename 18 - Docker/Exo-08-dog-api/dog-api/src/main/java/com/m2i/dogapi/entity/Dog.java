package com.m2i.dogapi.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;



@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Dog {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private Date birthDate;
    private String breed;
    private String color;
    private String gender;
    private Boolean sterilized;
}
