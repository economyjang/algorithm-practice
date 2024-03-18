class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        int calc1 = Integer.parseInt(a + "" + b);
        int calc2 = 2 * a * b;
        
        if(calc1 < calc2) {
            answer = calc2;
        } else {
            answer = calc1;
        }
        
        return answer;
    }
}