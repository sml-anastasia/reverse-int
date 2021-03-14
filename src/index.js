module.exports = function reverse (n) {
    let absN = Math.abs(n);
    let str = String(absN);
    let result = str.split("").reverse().join("");
    result = Number(result);
    return result;
}
