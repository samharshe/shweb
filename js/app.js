var hide = 3

console.log("hello");
var show_more_button = document.getElementById("show_more_button");

show_more_button.addEventListener("click", function(e){
    hide++;
    console.log(hide);
    s = "image-row-" + String(hide);
    var row = document.getElementById(s);
    row.classList.toggle("d-none");
    if(hide==17){
        document.getElementById("show_more_button").classList.toggle("d-none");
    }
});