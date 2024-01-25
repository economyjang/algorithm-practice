function solution(phone_number) {
    return phone_number.split('').map((val, idx, origin) => idx <= origin.length - 5 ? "*" : val
    ).join('');
}