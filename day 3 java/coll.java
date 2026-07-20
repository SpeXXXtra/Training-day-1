import java.util.ArrayList;
import java.util.List;
public class coll {
    public static void main(String[] args)
    {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);

        System.out.println(list);
        for(int i =0;i<list.size();i++){
            System.out.println(list.get(i));
        }

        list.remove(0);
        System.out.println(list);
    }
}
