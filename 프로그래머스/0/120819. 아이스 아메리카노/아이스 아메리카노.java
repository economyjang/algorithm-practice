class Solution {
    public int[] solution(int money) {
        int[] answer = {};
        
        int americanoCount = money / 5500;
        int restMoney = money - (americanoCount * 5500);
        
        answer = new int[]{americanoCount, restMoney};
        
        return answer;
    }
}