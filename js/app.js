var row_to_show = 3
var num_rows = 17;
var num_pics = 68;
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

images = document.querySelectorAll('img.img-fluid');
images.forEach(function(e){
    e.addEventListener('click', function(f){
        document.getElementById("jumbo-image").src = e.src;
        document.getElementById("clicked-image-jumbo").classList.toggle("d-md-inline");
    });
});

var close_button = document.getElementById("close-jumbo-button");
close_button.addEventListener("click", function(e){
    document.getElementById("clicked-image-jumbo").classList.toggle("d-md-inline");
});

var jumbo_image = document.getElementById("jumbo-image");
var chev_right = document.getElementById("chev-right");
var chev_left = document.getElementById("chev-left");
chev_right.addEventListener("click", function(e){
    var jumbo_image_src = document.getElementById("jumbo-image").src;
    var jumbo_image_number = Number(jumbo_image_src.slice(-7,-5));
    var new_image_number = jumbo_image_number + 1;
    var new_image_src;
    if(new_image_number < 10){
        new_image_src = "files/0" + String(new_image_number) + ".jpeg"
    } else if(jumbo_image_number == num_pics){
        new_image_src = jumbo_image_src;
    } else {
        new_image_src = "files/" + String(new_image_number) + ".jpeg"
    }
    jumbo_image.src = new_image_src;
});

chev_left.addEventListener("click", function(e){
    var jumbo_image_src = document.getElementById("jumbo-image").src;
    var jumbo_image_number = Number(jumbo_image_src.slice(-7,-5));
    var new_image_number = jumbo_image_number - 1;
    var new_image_src;
    if(jumbo_image_number == 1){
        console.log('if');
        new_image_src = jumbo_image_src;
    } else if(new_image_number < 10){
        new_image_src = "files/0" + String(new_image_number) + ".jpeg"
    } else {
        new_image_src = "files/" + String(new_image_number) + ".jpeg"
    }
    jumbo_image.src = new_image_src;
});