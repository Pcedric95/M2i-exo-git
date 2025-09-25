package com.m2i.exo03api_spring_boot;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    // GET /products
    public List<Product> getAll() {
        return repository.findAll();
    }

    // GET /products/{id}
    public Product getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Product " + id + " not found"));
    }

    // POST /products
    public Product create(Product p) {
        return repository.save(p);
    }

    // PATCH/PUT /products/{id}
    public Product update(Long id, Product data) {
        Product existing = getById(id);
        existing.setName(data.getName());
        existing.setPrice(data.getPrice());
        return repository.save(existing);
    }

    // DELETE /products/{id}
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new NotFoundException("Product " + id + " not found");
        }
        repository.deleteById(id);
    }
}
