package org.example.exo06_api_gestion_meubles.controller;

import org.example.exo06_api_gestion_meubles.model.CartItem;
import org.example.exo06_api_gestion_meubles.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    // GET /api/cart
    @GetMapping
    public List<CartItem> getAllCartItems() {
        return cartService.getAllCartItems();
    }

    // POST /api/cart/add
    @PostMapping("/add")
    public ResponseEntity<CartItem> addCartItem(@RequestBody Map<String, Object> body) {
        UUID furnitureId = UUID.fromString(body.get("furnitureId").toString());
        int quantity = Integer.parseInt(body.get("quantity").toString());
        Optional<CartItem> added = cartService.addCartItem(furnitureId, quantity);
        return added.map(ResponseEntity::ok)
                .orElse(ResponseEntity.badRequest().build());
    }

    // DELETE /api/cart/remove/{id}
    @DeleteMapping("/remove/{id}")
    public ResponseEntity<Void> removeCartItem(@PathVariable UUID id) {
        cartService.removeCartItem(id);
        return ResponseEntity.noContent().build();
    }

    // DELETE /api/cart/clear
    @DeleteMapping("/clear")
    public ResponseEntity<Void> clearCart() {
        cartService.clearCart();
        return ResponseEntity.noContent().build();
    }
}
