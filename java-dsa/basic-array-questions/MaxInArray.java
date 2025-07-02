public class MaxInArray {
    public static void main(String[] args){

        int[] arr = {12,53,87,32,54,99,23,54,78};
        System.out.println(max(arr));
    }
    static int max(int[] arr){
        int max = arr[0];
        for(int i = 1; i<arr.length; i++){
            if (arr[i] > max ){
                max = arr[i];
            }
        }
        return max;
    }
}
