import java.util.Arrays;
import java.util.Scanner;

public class ArrayInput {
    public static void main(String[] args){
        // Taking input of the array elements from the user
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        for(int i = 0; i<5; i++){
            arr[i] = sc.nextInt();
        }
        for(int element : arr){
            System.out.print( element + " " );
        }
        // another method for printing arrays
        int[] newArr = {12,23,12,23,21};
        System.out.println();
        System.out.println(Arrays.toString(newArr));
    }
}
