package org.example.exo06_api_gestion_meubles.service;

import org.example.exo06_api_gestion_meubles.model.Cart;
import org.example.exo06_api_gestion_meubles.model.CartItem;
import org.example.exo06_api_gestion_meubles.model.Furniture;
import org.example.exo06_api_gestion_meubles.repository.CartRepository;
import org.example.exo06_api_gestion_meubles.repository.CartItemRepository;
import org.example.exo06_api_gestion_meubles.repository.FurnitureRepository;
import org.example.exo06_api_gestion_meubles.exceptions.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final FurnitureRepository furnitureRepository;

    public CartService(CartItemRepository cartItemRepository, FurnitureRepository furnitureRepository, CartRepository cartRepository){
        this.cartItemRepository = cartItemRepository;
        this.furnitureRepository = furnitureRepository;
        this.cartRepository = cartRepository;
    }


    // Créer un panier
    public Cart createCart() {
        Cart cart = new Cart();
        cart.setItems(List.of());
        cart.setTotalPrice(0);
        return cartRepository.save(cart);
    }

    // 2 - Récupérer un panier avec id
    public Cart getCartById(UUID cartId) {
        return cartRepository.findById(cartId).orElseThrow(() -> new CartNotFoundException(cartId));
    }
    // 3. Ajouter un item au panier
    public Cart addItemToCart(UUID cartId, UUID furnitureId, int quantity) {
        Cart cart = getCartById(cartId);
        Furniture furniture = furnitureRepository.findById(furnitureId)
                .orElseThrow(() -> new FurnitureNotFoundException(furnitureId));
        if (furniture.getStock() < quantity) {
            throw new OutOfStockException(furniture.getName(), furniture.getStock());
        }
        // Ajout
        CartItem item = new CartItem();
        item.setFurniture(furniture);
        item.setQuantity(quantity);
        cart.getItems().add(item);

        // Maj du stock du meuble
        furniture.setStock(furniture.getStock() - quantity);
        furnitureRepository.save(furniture);

        // Recalcul du total
        calculateTotal(cart);

        return cartRepository.save(cart);
    }

    // 4. Retirer un item du panier
    public Cart removeItemFromCart(UUID cartId, UUID cartItemId) {
        Cart cart = getCartById(cartId);
        boolean removed = cart.getItems().removeIf(item -> item.getId().equals(cartItemId));
        if (!removed) throw new CartItemNotFoundException(cartItemId);
        calculateTotal(cart);
        return cartRepository.save(cart);
    }

    // 5. Vider le panier
    public Cart clearCart(UUID cartId) {
        Cart cart = getCartById(cartId);
        cart.getItems().clear();
        cart.setTotalPrice(0.0);
        return cartRepository.save(cart);
    }

    // 6. Recalculer le total du panier
    private void calculateTotal(Cart cart) {
        double total = cart.getItems().stream()
                .mapToDouble(item -> item.getFurniture().getPrice() * item.getQuantity())
                .sum();
        cart.setTotalPrice(total);
    }



    // ----------------  Ancien code ------------------------------

    /*

    // 1 - Récupérer items panier

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    // 2 - Ajouter un item au panier

    public Optional<CartItem> addCartItem(UUID furnitureId, int quantity) {
        Optional<Furniture> furnitureOpt = furnitureRepository.findById(furnitureId);
        if (furnitureOpt.isPresent()) {
            CartItem item = new CartItem();
            item.setFurniture(furnitureOpt.get());
            item.setQuantity(quantity);
            return Optional.of(cartItemRepository.save(item));
        }
        return Optional.empty();
    }

    // 3 - Retirer item du panier avec ID
    public void removeCartItem(UUID cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    // 4 - Vider le panier
    public void clearCart() {
        cartItemRepository.deleteAll();
    }

    */

}
