import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        
        String answer = "";
        
        for (int i = 0; i < s.length(); i++) {
            int temp = s.codePointAt(i);

            if (65 <= temp && temp <= 90) {
                answer += (char) (temp + 32);
            } else if (97 <= temp && temp <= 122) {
                answer += (char) (temp - 32);
            }
        }
        
        System.out.println(answer);
    }
}