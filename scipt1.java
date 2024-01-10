import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Ваш код здесь
        Scanner scanner = new Scanner(System.in)

        System.out.print("Введите количество дней: ");
        int NumberOfDays = scanner.nextInt();
        
        int SecondsInDays = 24 * 60 * 60;
        
        int All = NuberOfDays * SecondsInDays;


        System.out.println("В" + NumberOfDays + "днях" + All + "секунд.");
        Scanner.close();
    }
}