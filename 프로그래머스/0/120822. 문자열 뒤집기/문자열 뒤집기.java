class Solution {
    public String solution(String my_string) {
        String answer = "";
        
        char[] chars = my_string.toCharArray();
        for (int i = 0, j = chars.length - 1; i < j; i++, j--) {
            char temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
        }

        answer = new String(chars);
        
        return answer;
    }
}