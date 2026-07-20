public class exe1{
    public static void main(String[] args){
        // swap numbers
        int a = 10;
        int b = 12;
        int temp = a;
        a = b;
        b = temp;
        System.out.println("a = " + a + " b = " + b);
        //even  or odd
        int n = 7;
        if (n%2==0){
            System.out.println("Number is even");
        }else{
            System.out.println("Number is odd");
        }
        //largest of three
        int a = 10; int b = 15; int c = 16;
        if (a>b&&a>c){
            System.out.println(a);
        }
        else if (b>c){
            System.out.println(b);
            
        }else{
            System.out.println(c);
        }
    }
}