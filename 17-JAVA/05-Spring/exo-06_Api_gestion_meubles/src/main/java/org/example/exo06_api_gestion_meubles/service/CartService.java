package org.example.exo06_api_gestion_meubles.service;

import org.example.exo06_api_gestion_meubles.model.CartItem;
import org.example.exo06_api_gestion_meubles.model.Furniture;
import org.example.exo06_api_gestion_meubles.repository.CartItemRepository;
import org.example.exo06_api_gestion_meubles.repository.FurnitureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class CartService {

    private final CartItemRepository cartItemRepository;
    private final FurnitureRepository furnitureRepository;

    public CartService(CartItemRepository cartItemRepository, FurnitureRepository furnitureRepository){
        this.cartItemRepository = cartItemRepository;
        this.furnitureRepository = furnitureRepository;
    }

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
    public void CartItemById(UUID cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    // 4 - Vider le panier
    public void clearCart() {
        cartItemRepository.deleteAll();
    }

}
