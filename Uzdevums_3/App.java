import java.util.Scanner;
import java.util.List;

public class App {
    public static void main(String[] args) {
        ShoppingCart shoppingCart = new ShoppingCart();
        String csvFilePath = "Uzdevums_3/CsvManager.csv";
        CSVManager csvManager = new CSVManager(csvFilePath);
        List<Product> availableProducts = csvManager.loadProducts();

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Add to cart");
            System.out.println("2. Remove from cart");
            System.out.println("3. List products");
            System.out.println("4. Show cart");
            System.out.println("5. Exit");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    listAvailableProducts(availableProducts);
                    System.out.println("Enter the index of the product to add to cart:");
                    int productIndexToAdd = scanner.nextInt();
                    if (productIndexToAdd >= 0 && productIndexToAdd < availableProducts.size()) {
                        Product selectedProductToAdd = availableProducts.get(productIndexToAdd);
                        System.out.println("Enter quantity:");
                        int quantityToAdd = scanner.nextInt();
                        shoppingCart.addToCart(selectedProductToAdd, quantityToAdd);
                        System.out.println("Product added to cart.");
                    } else {
                        System.out.println("Invalid index.");
                    }
                    break;
                    case 2:
                    shoppingCart.showCart();
                    System.out.println("Enter the index of the product to remove from cart (from 0):");
                    int productIndexToRemove = scanner.nextInt();
                    shoppingCart.removeFromCart(productIndexToRemove);
                    break;                
                case 3:
                    listAvailableProducts(availableProducts);
                    break;
                case 4:
                    shoppingCart.showCart();
                    break;
                case 5:
                    System.exit(0);
            }
        }
    }

    private static void listAvailableProducts(List<Product> products) {
        System.out.println("Available Products:");
        for (int i = 0; i < products.size(); i++) {
            System.out.println(i + ". " + products.get(i));

        }
    }
}
