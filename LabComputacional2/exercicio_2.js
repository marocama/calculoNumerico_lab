let x = [1,2,3,4];
let y = [10,20,30,40];

function product(x, y) {
    var ret = [];
    for ( var i = 0 ; i < x.length ; i++ )
        ret.push(x[i] * y[i]);
    return ret;
}

function square(x) {
    var ret = [];
    for ( var i = 0 ; i < x.length ; i++ )
        ret.push(x[i] * x[i]);
    return ret;
}

function sum(x) {
    var ret = 0;
    for ( var i = 0 ; i < x.length ; i++ )
        ret += x[i];
    return ret;
}

function average(x) { return sum(x) / x.length; }

let m = sum(product(x,y)) - sum(x) * sum(y) / x.length;
m /= sum(square(x)) - sum(x)*sum(x) / x.length;

let b = average(y) - m * average(x);

console.log(m*5 + b);