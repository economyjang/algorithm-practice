class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        
        int totalMulti = 1;
        for(int i = 0; i < num_list.length; i++) {
            totalMulti *= num_list[i];
        }
        
        int totalSumPow = 0;
        for(int i = 0; i < num_list.length; i++) {
            totalSumPow += num_list[i];
        }
        totalSumPow = (int) Math.pow(totalSumPow, 2);
        
        answer = totalMulti > totalSumPow ? 0 : 1;
        
        return answer;
    }
}