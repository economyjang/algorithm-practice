class Solution {
    public int solution(int n) {
        int answer = 0;
        
        if(n % 2 == 0) {
            answer = sumEvenNum(n);
        } else {
            answer = sumOddNum(n);
        }
        
        return answer;
    }
    
    private int sumEvenNum(int n) {
        int sum = 0;
        
        for(int i = 1; i <= n; i++) {
            if(i % 2 == 0) {
                sum += i * i;
            }
        }
        
        return sum;
    }
    
    private int sumOddNum(int n) {
        int sum = 0;
        
        for(int i = 1; i <= n; i++) {
            if(i % 2 == 1) {
                sum += i;
            }
        }
        
        return sum;
    }
}