var row_to_show = 3
var num_rows = 17;
var show_more_button = document.getElementById("show_more_button");

show_more_button.addEventListener("click", function(e){
    row_to_show++;
    row_id = "image-row-" + String(row_to_show);
    var row = document.getElementById(row_id);
    row.classList.toggle("d-none");
    if(row_to_show==num_rows){
        document.getElementById("show_more_button").classList.toggle("d-none");
    }
});

for(var i = 0; i <= 68; i++){
    document.getElementById
}

var close_button = document.getElementById("close-jumbo-button");
close_button.addEventListener("click", function(e){
    document.getElementById("clicked-image-jumbo").classList.toggle("d-none");
});