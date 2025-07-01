public class MaxInArray {
    public static void main(String[] args){

        int[] arr = {12,53,87,32,54,99,23,54,78};
        int maxNum = arr[1];
        for(int i=0; i<arr.length; i++){
            if(maxNum<arr[i]){
                maxNum = arr[i];
            }else{
                maxNum = -1;
            }
        }
        System.out.println(maxNum);
    }
}
