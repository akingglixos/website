function encryptText(arrayChars){
    let arrayEncrypted = [];
    let stringEncrypted = '';
    for(i = 0; i < arrayChars.length; i++){
        arrayEncrypted.push(CHARS_MAP.get(arrayChars[i]));
    }
    stringEncrypted = arrayEncrypted.join('');
    return stringEncrypted;
}

function decryptText(arrayChars){
    let arrayDecrypted = [];
    let stringDecrypted = '';
    for(i = 0; i < arrayChars.length; i++){
        arrayDecrypted.push(getKeyByValue(CHARS_MAP, arrayChars[i]));
        console.log(arrayDecrypted);
    }
    stringDecrypted = arrayDecrypted.join('');
    return stringDecrypted;
}

function getText(){
    let textInput = document.getElementById('text-input');
    let lowerCaseTextInput = `${textInput.value}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let arrayChars = [...lowerCaseTextInput];
    return arrayChars;
}

function encryptButton(){
    let textOutput = document.getElementById('text-output');
    textOutput.value = encryptText(getText());
}

function decryptButton(){
    let textOutput = document.getElementById('text-output');
    textOutput.value = decryptText(getText());
}

function getKeyByValue(map, input) {
    for(let [key, value] of map.entries()) {
        if (value === input) {
            return key;
        }
    }
}

const CHARS_MAP = new Map([
    ['?', '.'],
    ['!', ','],
    ['.', '/'],
    [' ', ' '],
    ['0', '+'],
    ['9', '7'],
    ['8', '"'],
    ['7', '`'],
    ['6', 'a'],
    ['5', ':'],
    ['4', 'y'],
    ['3', '('],
    ['2', '='],
    ['1', ';'],
    ['z', '©'],
    ['y', '^'],
    ['x', '!'],
    ['w', '&'],
    ['v', 'p'],
    ['u', '{'],
    ['t', '↨'],
    ['s', '['],
    ['r', '¦'],
    ['q', '@'],
    ['p', '´'],
    ['o', '±'],
    ['n', '$'],
    ['m', '|'],
    ['l', '>'],
    ['k', '-'],
    ['j', '~'],
    ['i', '#'],
    ['h', 'þ'],
    ['g', ']'],
    ['f', '}'],
    ['e', '%'],
    ['d', 'k'],
    ['c', '<'],
    ['b', 'z'],
    ['a', ')'],
]);