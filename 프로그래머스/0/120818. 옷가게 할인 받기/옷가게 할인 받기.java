class Solution {
    public int solution(int price) {
        int answer = 0;
        
        double discountRate = 0.0;
        
        if(100000 <= price && price < 300000) {
            discountRate = 0.05;
        } else if(300000 <= price && price < 500000) {
            discountRate = 0.1;
        } else if(500000 <= price) { 
            discountRate = 0.2;           
        }
        
        answer = (int) (price - (price * discountRate));
        
        return answer;
    }
}