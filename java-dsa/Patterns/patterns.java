public class patterns {
    public static void main(String[] args){
    //pattern1(5);
    pattern2(5);
    }
    // pattern1
    /*
     * *
     * * *
     * * * *
     * * * * *
     */
    static void pattern1(int n){
        for(int row = 1; row<=n; row++){
            for(int col = 1; col<=row; col++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    /* pattern2
    * * * * *
    * * * * *
    * * * * *
    * * * * *
     */
    static void pattern2(int n){
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
