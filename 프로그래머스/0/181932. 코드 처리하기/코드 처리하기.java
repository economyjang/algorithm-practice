class Solution {
    public String solution(String code) {
        String answer = "";
        boolean mode = false;
        
        for(int i = 0; i < code.length(); i++) {
            if (code.charAt(i) == '1') {
                mode = !mode;
                continue;
            }
            
            if (mode) { // mode == 1 (true)
                if(i % 2 == 1) {
                    answer += code.charAt(i);
                }
            } else { // mode == 0 (false)
                if(i % 2 == 0) {
                    answer += code.charAt(i);
                }
            }
        }
        
        if(answer.equals("")) {
            answer = "EMPTY";
        }
        
        return answer;
    }
}