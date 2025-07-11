package org.example.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Data
public class Customer {
    private int id;
    private String firstname;
    private String lastname;
    private String phone;

}
