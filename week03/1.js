function replaceWhiteSpaceInStr(str) {
    let resStr = str.replace(/\s*/g, ''); // 去除空格
    resStr = resStr.replace(/[\r|\n]/g, ''); // 去除换行
    return resStr;
}

function formatStrByRadix(str, radix) {
    let resStr = '';
    let testReg = null;
    switch (radix) {
        case 10:
            testReg = /^((0)|([1-9][0-9]*))?.?([0-9]*)((e|E)?(\+|\-)?([0-9]*))?/;
            break;
        case 2:
            testReg = /^(0|1)+/;
            break;
        case 8:
            testReg = /^[0-7]+/;
            break;
        case 16:
            testReg = /^0(x|X)?([0-9a-fA-F])+/;
            break;
        default:
            console.log(`radix: ${radix}, str:  ${str} illegal radix`)
            return false;
    }
    resStr = (testReg.exec(str) && testReg.exec(str)['0']) || 'convert fail';
    console.log(`radix: ${radix}, ${str} --> resStr: `, resStr);
}

function convertStringToNumber(str, radix) {
    const noWhiteSpaceStr = replaceWhiteSpaceInStr(str);
    const checkedRadixStr = formatStrByRadix(str, radix);
    let resNum = 0;
    switch (radix) {
        case 10:
            resNum = converStringToDeciaml(str);
            break;
        case 2:
            resNum = converStringToBinaryInteger(str);
            break;
        case 8:
            resNum = converStringToOctalInteger(str);
            break;
        case 16:
            resNum = converStringToHexIntegers(str);
            break;
        default:
            return NaN;
    }
    return resNum;
}
