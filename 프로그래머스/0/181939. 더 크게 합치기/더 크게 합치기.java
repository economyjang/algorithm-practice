class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        int sum1 = Integer.parseInt(a + "" + b);
        int sum2 = Integer.parseInt(b + "" + a);
        
        if (sum1 < sum2) {
            answer = sum2;
        } else if(sum1 >= sum2) {
            answer = sum1;
        }
        
        return answer;
    }
}