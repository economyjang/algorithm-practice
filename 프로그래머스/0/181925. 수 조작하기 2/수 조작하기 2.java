class Solution {
    public String solution(int[] numLog) {
        StringBuilder answer = new StringBuilder();
        
        for (int i = 0; i < numLog.length - 1; i++) {
            int diff = numLog[i + 1] - numLog[i];
            
            if(diff == 1) {
                answer.append("w");
            } else if(diff == -1) {
                answer.append("s");
            } else if(diff == 10) {
                answer.append("d");
            } else if(diff == -10) {
                answer.append("a");
            }
        }
        
        return answer.toString();
    }
}