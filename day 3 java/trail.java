public class trail {
    public static void main(String[] args) {
        String word = "Apple orange banana";
        String[] fruits = word.split(" ");
        for (String fruit : fruits){
            System.out.println(fruit);
        }    
    }
}
