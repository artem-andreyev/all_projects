import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CSVManager {
    private String filePath;

    public CSVManager(String filePath) {
        this.filePath = filePath;
    }

public List<Product> loadProducts() {
    List<Product> products = new ArrayList<>();

    try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
        String line;
        while ((line = reader.readLine()) != null) {
            String[] parts = line.split(",");
            if (parts.length != 4) {
                System.out.println("Invalid line in CSV file: " + line);
                continue;
            }
            int id = Integer.parseInt(parts[0]);
            String name = parts[1];
            double price = Double.parseDouble(parts[2]);
            String category = parts[3];

            Product product = new Product(id, name, price, category);
            products.add(product);
        }
    } catch (IOException e) {
        e.printStackTrace();
        System.out.println("Error reading the CSV file.");
    }

    return products;
}
}