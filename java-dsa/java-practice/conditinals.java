public class conditinals {
    public static void main(String[] args) {
        int age = 1;
        if(age>=18){
            System.out.println("You are eligible for voting");
        }else{
            System.out.println("Sorry, you are not eligible for voting");
        }

        int[] arr = {12,23,21,2};
        // System.out.println(arr[2]);
        for(int i = 0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
        // Enhanced for loop
        System.out.println("This is from Enhanced for loop");
        for(int j: arr){
            System.out.println(j);
        }
        //while loop
        int k = 0;
        System.out.println("This is from while loop");
        while(k<arr.length){
            System.out.println(arr[k]);
            k++;
        }
    }
}
