public class exceptions {
    public static void main(String[] args) {
        try{
            int d = 3/0;
            System.out.println(d);
            
        }catch(ArithmeticException e){
            System.out.println("Arithmetic Exception");
        }
    }
}
