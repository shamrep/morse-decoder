const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const chunks = [];

    for (let i = 0; i < expr.length; i += 10) {
        const chunk = expr.substr(i, 10);
        const char = chunk
            .replace(/11/g, '-')
            .replace(/10/g, '.')
            .replace(/0/g, '');

        if (char === '**********') {
            chunks.push(' ');
        } else if (MORSE_TABLE[char]) {
            chunks.push(MORSE_TABLE[char]);
        }
    }

    return chunks.join('');
}

module.exports = {
    decode
}