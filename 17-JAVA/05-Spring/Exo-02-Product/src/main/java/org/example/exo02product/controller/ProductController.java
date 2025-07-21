package org.example.exo02product.controller;

import org.example.exo02product.interfaces.iProductService;
import org.example.exo02product.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    public String getAll(Model model) {
        model.addAttribute("products", productService.getAllProducts());
        model.addAttribute("isFiltered", false);
        return "products"; // templates/products.html
    }

    @GetMapping("/filter")
    public String filter(
            @RequestParam String category,
            @RequestParam double maxPrice,
            Model model
    ) {
        model.addAttribute("products", productService.filterProducts(category, maxPrice));
        model.addAttribute("isFiltered", true);
        return "products"; // même page HTML
    }

    @GetMapping("/{id}")
    public String getById(@PathVariable int id, Model model) {
        Product product = productService.getProductById(id);
        model.addAttribute("product", product);
        return "product-details"; // => templates/product-details.html
    }
}
