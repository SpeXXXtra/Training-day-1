import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;

public class filehandling {
    public static void main(String[] args){
        File fh = new File("names.txt");

        //reading a file
        try {
            Scanner sc = new Scanner(fh);
            while (sc.hasNextLine()){
                String line  = sc.nextLine();
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try {
            FileWriter fw = new FileWriter("names.txt",false);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
