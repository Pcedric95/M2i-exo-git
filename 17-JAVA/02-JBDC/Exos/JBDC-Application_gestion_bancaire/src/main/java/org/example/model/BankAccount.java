package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class BankAccount {
    private int id;
    private int customerId;
    private Customer customer;
    private double totalAmount;
    private List<Operation> operations = new ArrayList<>();
}
