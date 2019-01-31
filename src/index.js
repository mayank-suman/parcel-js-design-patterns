var a = 1;

(function module() {
    var a = 2;
    console.log(a);
})();

console.log(a);

function fn() {
    var a = 3;
    console.log(a);
}

fn();
console.log(a);