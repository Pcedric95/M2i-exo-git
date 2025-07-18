package org.example.exo02product.service;

import org.example.exo02product.interfaces.iProductService;
import org.example.exo02product.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class ProductService implements iProductService {

    private final List<Product> products = new ArrayList<>();

    public ProductService() {
        products.add(new Product(1, "Beurre", "Épicerie", 1.5));
        products.add(new Product(2, "Coca", "Boisson", 2.0));
        products.add(new Product(3, "Sprite", "Boisson", 2.0));
        products.add(new Product(4, "Orangina", "Boisson", 2.0));
    }

    @Override
    public List<Product> getAllProducts() {
        return products;
    }

    @Override
    public Product getProductById(int id) {
        return products.stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @Override
    public List<Product> filterProducts(String category, double maxPrice) {
        return products.stream()
                .filter(p -> p.getCategory().equalsIgnoreCase(category))
                .filter(p -> p.getPrice() <= maxPrice)
                .collect(Collectors.toList());
    }
}
