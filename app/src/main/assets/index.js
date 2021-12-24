let year = document.getElementById("n");
let mon = document.getElementById("y");
let day = document.getElementById("day");
let hour = document.getElementById("h");
let min = document.getElementById("m");
let ss = document.getElementById("s");

function getTime() {
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1;
    var r = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    year.innerHTML = odd0(y);
    mon.innerHTML = odd0(mo);
    day.innerHTML = odd0(r);
    hour.innerHTML = odd0(h);
    min.innerHTML = odd0(m);
    ss.innerHTML = odd0(s);
}
setInterval(function() {
    getTime();
}, 1000);

function odd0(num) {
    return num > 9 ? num : "0" + num;
}