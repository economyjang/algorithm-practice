class Solution {
    public int solution(int num1, int num2) {
        int answer = -1;
        
        double divide = (double) num1 / (double) num2;
        answer = (int) (divide * 1000);        
        return answer;
    }
}