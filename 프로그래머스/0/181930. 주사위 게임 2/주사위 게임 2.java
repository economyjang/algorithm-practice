import java.util.*;

class Solution {
    public int solution(int a, int b, int c) {
        int answer = 0;
        
        if(a == b && b == c) {
            answer = calcFirstPowSum(a, b, c) * calcSecondPowSum(a, b, c) * calcThirdPowSum(a, b, c);
        } else if(a == b || a == c || b == c) {
            answer = calcFirstPowSum(a, b, c) * calcSecondPowSum(a, b, c);
        } else {
            answer = calcFirstPowSum(a, b, c);
        }
        
        return answer;
    }
    
    private int calcFirstPowSum(int a, int b, int c) {
        return a + b + c;
    }
    
    private int calcSecondPowSum(int a, int b, int c) {
        return (int) (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    }
    
    private int calcThirdPowSum(int a, int b, int c) {
        return (int) (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    }
}