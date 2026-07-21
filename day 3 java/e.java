import java.time.LocalDate;
import java.util.Scanner;
enum Day{
    MONADAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

public class e{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the date: ");

        LocalDate date = LocalDate.parse(sc.nextLine());
        LocalDate billDate = date.plusDays(30);
    


    }
}