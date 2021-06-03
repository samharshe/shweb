books_file = open("/Users/samharshe/Documents/Programming/SH/txt/books.txt", "r")

num_books = 210
ital = []
non_ital = []
alpha = []
line = []

for i in range(num_books):
    split_line = (books_file.readline()).split('|', 2)
    ital.append(split_line[0])
    non_ital.append(split_line[1])
    alpha.append(split_line[2][:-1])

for i in range(len(alpha)):
    item = [alpha[i], ital[i], non_ital[i]]
    line.append(item)
line.sort()

print("<ul id='booklist'>")
for item in line:
    print("<li><span class=\"book-title\">{}</span> {}</li>".format(item[1], item[2]))
print("</ul>")