import java.util.Arrays;
import java.util.Scanner;

public class MultidimensionalArrays {
    public static void main(String[] args){
        // input for 2d array
        int[][] arr = new int[3][3];
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i<arr.length; i++){
            for(int j = 0; j<arr[i].length; j++){
                arr[i][j] = sc.nextInt();
            }
        }

        // output of 2d array
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
        // also for output we can do
        for(int row = 0; row<arr.length; row++){
            System.out.println(Arrays.toString(arr[row]));
        }
    }
}
