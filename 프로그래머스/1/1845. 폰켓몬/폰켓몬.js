function solution(nums) {
    const maxSelectCount = nums.length / 2;
    const noDuplicatePokeMon = new Set(nums);
    return noDuplicatePokeMon.size > maxSelectCount ? maxSelectCount : noDuplicatePokeMon.size;
}