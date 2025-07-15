package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Operation {
    private int id;
    private double amount;
    private String status; // Deposit et/ou withdrawal
    private int accountId;
}
