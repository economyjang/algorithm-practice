function solution(letter) {
    let answer = '';
    
    let letterSplitList = letter.split(" ");
    
    for(let i = 0; i < letterSplitList.length; i++){
        let alphabet = morse[letterSplitList[i]];
        if(alphabet) answer += alphabet;
    }
    
    return answer.toLowerCase();
}

const morse = { 
    '.-':'a', '-...':'b',
    '-.-.':'c', '-..':'d',
    '.':'e', '..-.':'f', 
    '--.':'g', '....':'h',
    '..':'i', '.---':'j',
    '-.-':'k', '.-..':'l',
    '--':'m', '-.':'n',
    '---':'o', '.--.':'p',
    '--.-':'q', '.-.':'r',
    '...':'s', '-':'t',
    '..-':'u', '...-':'v',
    '.--':'w', '-..-':'x',
    '-.--':'y', '--..':'z'
}