package org.example.exo06_api_gestion_meubles.controller;

import org.example.exo06_api_gestion_meubles.model.Cart;
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


    // Créer un panier

    @PostMapping
    public Cart createCart() {
        return cartService.createCart();
    }


    // Voir ce que contient le panier

    @GetMapping("{cartId}")
    public Cart getCart(@PathVariable UUID cartId) {
        return cartService.getCartById(cartId);
    }

    // Ajouter un meuble dans le panier
    @PostMapping("/{cartID}/add")
    public Cart addItemToCart(@PathVariable UUID cartID, @RequestBody Map<String, Object> body) {
        UUID furnitureId = UUID.fromString(body.get("furnitureId").toString());
        int quantity = Integer.parseInt(body.get("quantity").toString());
        return cartService.addItemToCart(cartID, furnitureId, quantity);
    }

    // Supprimer un item du panier
    @DeleteMapping("/{cartID}/remove/{cartItemId}")
    public Cart removeItemFromCart(@PathVariable UUID cartID, @PathVariable UUID cartItemId) {
        return cartService.removeItemFromCart(cartID, cartItemId);
    }

    // Vider le panier
    @DeleteMapping("/{cartID}/clear")
    public Cart clearCart(@PathVariable UUID cartID) {
        return cartService.clearCart(cartID);
    }

}
