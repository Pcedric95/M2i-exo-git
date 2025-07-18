package org.example.exo02product.controller;

import org.example.exo02product.interfaces.iProductService;
import org.example.exo02product.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/products")
public class ProductController {

    private final iProductService productService;

    @Autowired
    public ProductController(iProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    @ResponseBody
    public List<Product> getAll() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    @ResponseBody
    public Product getById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @GetMapping("/filter")
    @ResponseBody
    public List<Product> filter(
            @RequestParam String category,
            @RequestParam double maxPrice) {
        return productService.filterProducts(category, maxPrice);
    }
}
