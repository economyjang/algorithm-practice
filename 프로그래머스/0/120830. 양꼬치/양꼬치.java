class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        
        int yangGochiAmount = n * 12000;
        int serviceBeverageCount = n / 10;
        int beverageAmount = (k - serviceBeverageCount) * 2000;
        
        answer = yangGochiAmount + beverageAmount;
        
        return answer;
    }
}