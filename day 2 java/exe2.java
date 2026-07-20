public class exe2{
    public static void main(String[] args){
        //factorial
        int num = 5;
        int prod = 1;
        for(int i =1;i<=5;i++){
            prod *= i;
        }
        System.out.println(prod);
        //fibonacci series
        int a = 0;int b = 1;
        System.out.print(a +" "+ b +" ");
        for(int i=2;i<=10;i++){
            int c = a+b;
            System.out.print(c+" ");
            a=b;
            b=c;
        }
        //palindrome Number check
        int num1 = 121;
        int original = num1;
        int rev = 0;
        
        while(num1>0){
            int last = num1%10;
            num1 = num1/10;
            rev = rev*10 + last;
        }
        System.out.println(rev==num1);
    }
}