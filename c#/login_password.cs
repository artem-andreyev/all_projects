using System;
using System.Linq;
using System.Text.RegularExpressions;

class HelloWorld {
    static void Main() {
        Console.WriteLine("Ievadiet savu jaunu logini un paroli lai piereģistreties (vispirms ievadiet loginu un pēc tam paroli) ");

        Regex letterRegex = new Regex(@"^[a-zA-Z]+$");

        int maxAttempts = 3;
        string userid = Console.ReadLine();
        string password;

        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            Console.WriteLine($"Ievadiet atbilstošo paroli (nesatur specialos simbolus, ir vismaz 6 simboli un satur vismaz vienu ciparu) (mēģinājums {attempt}/{maxAttempts}): ");
            password = Console.ReadLine();
            if (password.Length >= 6 && letterRegex.IsMatch(password) && password.Any(char.IsDigit)) {
                Console.WriteLine("Viss pareizi, jauns parols ir izveidots");
                return;
            }
        }

        Console.WriteLine($"Maksimālais mēģinājumu skaits sasniegts. Reģistrācija neveiksmīga pēc {maxAttempts} mēģinājumiem.");
    }
}
