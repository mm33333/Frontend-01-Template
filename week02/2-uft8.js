function toUnicode(theString) {
    var unicodeString = '';
    for (var i = 0; i < theString.length; i++) {
        var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
        // while (theUnicode.length < 4) {
        //     theUnicode = '0' + theUnicode;
        // }
        theUnicode = '\\x' + theUnicode;
        unicodeString += theUnicode;
    }
    return unicodeString;
}
