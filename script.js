var message = "in global"
console.log("global :message " + message);

var a = function() {
    var message = "inside a"
    console.log("insde a: mesaage " + message);
    b();
}

var b = function() {
    console.log(message);
}
a();