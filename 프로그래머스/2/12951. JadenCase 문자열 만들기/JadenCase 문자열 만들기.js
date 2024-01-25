// 모든 단어의 첫 문자가 대문자, 그 외는 소문자
// 첫 문자가 알파벳이 아니면 나머지 소문자
function solution(s) {
    return s.split(' ').map((v) => {
        if(/^\d/.test(v)) {
            return v.toLowerCase();
        } else {
            v = v.toLowerCase();
            v = v.charAt(0).toUpperCase() + v.slice(1);
            return v;
        }
    }).join(' ');
}