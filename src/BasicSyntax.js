export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    let romanDigits = 'IVXLCDM';
    let pos = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        let curRomDig = romanDigits.search(str[i]);
        let curArDig = 10 ** Math.floor(curRomDig / 2) * 5 ** (curRomDig % 2);

        if (curRomDig >= pos) {
            result += curArDig;
            pos = curRomDig;
        } else {
            result -= curArDig;
        }
    }

    return result;
}
