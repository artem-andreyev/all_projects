import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ShoppingCart {
    private List<String> productNames;
    private Map<String, Integer> cartItems;

    public ShoppingCart() {
        this.productNames = new ArrayList<>();
        this.cartItems = new HashMap<>();
    }

    public void addToCart(Product product, int quantity) {
        String productName = product.getName();
        int currentQuantity = cartItems.getOrDefault(productName, 0);
        cartItems.put(productName, currentQuantity + quantity);
        if (!productNames.contains(productName)) {
            productNames.add(productName);
        }
    }

    public void removeFromCart(String productName) {
        if (cartItems.containsKey(productName)) {
            int currentQuantity = cartItems.get(productName);
            if (currentQuantity > 1) {
                cartItems.put(productName, currentQuantity - 1);
                System.out.println("Product removed from cart.");
            } else {
                cartItems.remove(productName);
                System.out.println("Product removed from cart.");
            }
        } else {
            System.out.println("Product not in cart.");
        }
    }
    
    public void removeFromCart(int index) {
        if (index >= 0 && index < productNames.size()) {
            String productNameToRemove = productNames.get(index);
            int currentQuantity = cartItems.getOrDefault(productNameToRemove, 0);
            if (currentQuantity > 0) {
                cartItems.put(productNameToRemove, currentQuantity - 1);
                if (currentQuantity == 1) {
                    productNames.remove(productNameToRemove);
                }
                System.out.println("Product removed from cart.");
            } else {
                System.out.println("Product not in cart.");
            }
        } else {
            System.out.println("Invalid index.");
        }
    }
    

    public void showCart() {
        if (cartItems.isEmpty()) {
            System.out.println("Your cart is empty.");
        } else {
            System.out.println("Shopping Cart:");
            for (Map.Entry<String, Integer> entry : cartItems.entrySet()) {
                String productName = entry.getKey();
                int quantity = entry.getValue();
                if (quantity > 0) {
                    System.out.println(productName + " - Quantity: " + quantity);
                }
            }
        }
    }    

    public Map<String, Integer> getCartItems() {
        return cartItems;
    }
}
