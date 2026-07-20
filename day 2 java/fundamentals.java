import java.util.Scanner;
public class fundamentals {
    public static void main(String[] args) {
        // arithmetic operators
        int a = 10;
        int b = 12;
        System.out.println(a+b);
        System.out.println(a-b);
        System.out.println(a*b);
        System.out.println(a/b);
        System.out.println(a%b);

        //Logical operators
        System.out.println(a<b);
        System.out.println(a>b);
        System.out.println(a!=b);
        System.out.println(a==b);
        System.out.println(a<=b);

        //scanner class
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello " + name);
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        System.out.println("Your age is "+ age);

        //control flow (if else)
        int marks = 90;
        if(marks>=90){
            System.out.println("grade A");
        }
        else if(marks<90 && marks >50){
            System.out.println("Grade pass");
        }
        else{
            System.out.println("Fail!");
        }

        //control flow(Switch case)
        int day = 3;
        switch(day){
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            default:
                System.out.println("Nothing ");
        }
        //loops
        for(int i =0;i<=5;i++){
            System.out.println(i);
        }
        int i = 0;
        while (i<3){
            System.out.println(i);
            i++;
        }
        
    }
}