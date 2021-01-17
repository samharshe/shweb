for j in range(1,68,4):
    print("<div class=\"row\">")
    for i in range(j,j+4):
        print("<div class=\"col-md-3 p-4\"><img src=\"files/{}.jpeg\" class=\"img-fluid\" alt=\"Responsive image\"></div>".format(i))
    print("</div>")