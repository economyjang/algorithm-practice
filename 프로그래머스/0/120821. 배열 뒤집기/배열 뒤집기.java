class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = {};
        
        int start = 0;
        int end = num_list.length - 1;
        
        while(start < end) {
            int temp = num_list[start];
            num_list[start] = num_list[end];
            num_list[end] = temp;
            
            start++;
            end--;
        }
        
        answer = num_list;
        
        return answer;
    }
}