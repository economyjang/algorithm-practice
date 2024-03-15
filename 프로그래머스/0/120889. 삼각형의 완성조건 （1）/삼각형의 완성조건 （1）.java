import java.util.Arrays;

class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        Arrays.sort(sides);
        int a = sides[0];
        int b = sides[1];
        int c = sides[2];
        
        answer = a + b > c ? 1 : 2;
        
        return answer;
    }
}