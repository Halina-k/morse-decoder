const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];
    let n = 10;
    for (let i = 0; i < expr.length; i = i + n) {
       array.push(expr.slice(i, i + n));
    }
    console.log(array)
    
    
    let array2 = array.map((value) => {
      if (value !== "**********") {
        let subarray = [];
        let k = 2;
      for (let i = 0; i < value.length; i = i + k) {
        subarray.push(value.slice(i, i + k));
      }
      return subarray
      } else {return value}
    })
    
    console.log(array2)
    
    let arrayRes = array2.map((value) => {
      if (value === "**********") {
        return " ";
      } else {
        return value.map((a) => {
          if (a === "10") {
            return ".";
          } else if (a === "11") {
            return "-";
          } else if (a === "00") {
            return ""
          } else {
            return a
          }
        })
      }
    })
    
    console.log(arrayRes)
    
    arrayResStr = arrayRes.map ((value) => {
      if (value !== " ") {
        return value.join('');
      } else {
        return value};
    })
    
    console.log(arrayResStr)
    
    result = arrayResStr.map ((a) => {
      if (a !== " ") {
        return MORSE_TABLE[a];
      } else {
        return a
      }
    })
    
    return result.join('');
}

module.exports = {
    decode
}