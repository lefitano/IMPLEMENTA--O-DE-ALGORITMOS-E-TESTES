function mdc(a, b) {
    
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
module.exports = {mdc};
