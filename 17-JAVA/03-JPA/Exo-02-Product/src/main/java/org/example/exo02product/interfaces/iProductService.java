package org.example.exo02product.interfaces;

import org.example.exo02product.model.Product;

import java.util.List;

public interface iProductService {
    List<Product> getAllProducts();
    Product getProductById(int id);
    List<Product> filterProducts(String category, double maxPrice);
}
