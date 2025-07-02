import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args){
        // Syntax of arraylist
        ArrayList<Integer> list = new ArrayList<>(5);
        list.add(12);
        list.add(23);
        list.add(564);
        list.add(345);
        list.add(1243);
        list.add(34);

        list.set(1,1234); // to change value of any index in a list
        list.remove(2); // to remove any value from the arraylist
        System.out.println(list);

        // for input in arraylist
        // Scanner in =  new Scanner(System.in);
        //for(int i = 0; i<6; i++){
          //  list.add(in.nextInt());
        //}

    }
}
