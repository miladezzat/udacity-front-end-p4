function checkForName(url) {
const regexp = /^(?:http(s)?:\/\/)?[\www.-]+(?:\.[\www\.-]+)+[\www\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
if (regexp.test(url)) {
    return true;
}
 return false;
}


export { checkForName }