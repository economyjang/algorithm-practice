import java.util.Arrays;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        int firstMax = 0;
        int secondMax = 0;
        
        Arrays.sort(numbers);
        firstMax = numbers[numbers.length - 1];
        secondMax = numbers[numbers.length - 2];
        
        answer = firstMax * secondMax;
        
        return answer;
    }
}